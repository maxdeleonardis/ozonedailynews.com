// lib/github-commit.ts
// Concurrency-safe atomic multi-file commit via the GitHub Git Data API.
// Shared by the publish bridge (/api/cms/publish) and the correction/update
// bridge (/api/cms/update) so there is ONE commit implementation, never two.

interface GitRef       { object: { sha: string } }
interface GitCommit    { tree: { sha: string } }
interface GitTree      { sha: string }
interface GitNewCommit { sha: string }

export async function ghFetch<T>(
  path: string,
  token: string,
  options: RequestInit = {},
): Promise<T> {
  const res = await fetch(`https://api.github.com${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github+json',
      'Content-Type': 'application/json',
      'X-GitHub-Api-Version': '2022-11-28',
      ...(options.headers ?? {}),
    },
  });
  if (!res.ok) {
    const err = (await res.json().catch(() => ({}))) as { message?: string };
    throw new Error(err.message ?? `GitHub API ${res.status} at ${path}`);
  }
  return res.json() as Promise<T>;
}

/**
 * Commits multiple files atomically. All files land in a single commit.
 * The final ref PATCH uses force:false, so GitHub rejects with 422 if another
 * commit landed in between — we retry with backoff, re-reading the latest ref.
 */
export async function commitFilesAtomically(
  owner: string,
  repo: string,
  branch: string,
  token: string,
  files: Array<{ path: string; content: string }>,
  message: string,
  maxRetries = 3,
): Promise<{ ok: boolean; error?: string; commitSha?: string }> {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const ref = await ghFetch<GitRef>(`/repos/${owner}/${repo}/git/ref/heads/${branch}`, token);
      const latestCommitSha = ref.object.sha;

      const commit = await ghFetch<GitCommit>(
        `/repos/${owner}/${repo}/git/commits/${latestCommitSha}`,
        token,
      );
      const baseTreeSha = commit.tree.sha;

      const treeItems = files.map((f) => ({
        path: f.path,
        mode: '100644',
        type: 'blob',
        content: f.content,
      }));

      const newTree = await ghFetch<GitTree>(
        `/repos/${owner}/${repo}/git/trees`,
        token,
        { method: 'POST', body: JSON.stringify({ base_tree: baseTreeSha, tree: treeItems }) },
      );

      const newCommit = await ghFetch<GitNewCommit>(
        `/repos/${owner}/${repo}/git/commits`,
        token,
        { method: 'POST', body: JSON.stringify({ message, tree: newTree.sha, parents: [latestCommitSha] }) },
      );

      await ghFetch(
        `/repos/${owner}/${repo}/git/refs/heads/${branch}`,
        token,
        { method: 'PATCH', body: JSON.stringify({ sha: newCommit.sha, force: false }) },
      );

      return { ok: true, commitSha: newCommit.sha };
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      const isConflict = msg.includes('Update is not a fast forward') || msg.includes('422');
      if (isConflict && attempt < maxRetries) {
        await new Promise((r) => setTimeout(r, 200 * Math.pow(2, attempt - 1)));
        continue;
      }
      return { ok: false, error: msg };
    }
  }
  return { ok: false, error: 'Max retries exceeded (concurrent commit collision)' };
}

// ─── Brand → Git branch map (shared by publish + update bridges) ───────────────
export const BRAND_BRANCH: Record<string, string> = {
  ozone:     'master',
  basil:     'basil',
  obsidian:  'obsidian',
  honey:     'honey',
  onyx:      'onyx',
  clover:    'clover',
  content:   'content',
  objective: 'objective',
};
