/**
 * GitHub Contents API write bridge.
 * Writes and deletes files in the repo via the GitHub REST API.
 * Requires: GITHUB_TOKEN, GITHUB_REPO, GITHUB_BRANCH env vars.
 */

export interface WriteResult {
  ok: boolean;
  commitSha?: string;
  error?: string;
}

function getConfig() {
  const token = process.env.GITHUB_TOKEN;
  const repo = process.env.GITHUB_REPO;
  const branch = process.env.GITHUB_BRANCH ?? 'main';

  if (!token || !repo) {
    throw new Error(
      'Missing required env vars: GITHUB_TOKEN and GITHUB_REPO must be set.'
    );
  }

  return { token, repo, branch };
}

async function getFileSha(
  token: string,
  repo: string,
  branch: string,
  filePath: string
): Promise<string | null> {
  const url = `https://api.github.com/repos/${repo}/contents/${filePath}?ref=${branch}`;
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });

  if (res.status === 404) return null;
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`GitHub GET ${filePath} failed (${res.status}): ${body}`);
  }

  const data = (await res.json()) as { sha: string };
  return data.sha;
}

/**
 * Write (create or update) a file in the GitHub repo.
 * @param filePath  Repo-relative path, e.g. "content/static/articles/my-slug.json"
 * @param content   File content as a plain string (will be base64-encoded)
 * @param commitMessage  Git commit message
 */
export async function writeFileToGitHub(
  filePath: string,
  content: string,
  commitMessage: string
): Promise<WriteResult> {
  try {
    const { token, repo, branch } = getConfig();
    const sha = await getFileSha(token, repo, branch, filePath);

    const body: Record<string, unknown> = {
      message: commitMessage,
      content: Buffer.from(content, 'utf-8').toString('base64'),
      branch,
    };
    if (sha) body.sha = sha;

    const url = `https://api.github.com/repos/${repo}/contents/${filePath}`;
    const res = await fetch(url, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github+json',
        'Content-Type': 'application/json',
        'X-GitHub-Api-Version': '2022-11-28',
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const errBody = await res.text();
      return { ok: false, error: `GitHub PUT failed (${res.status}): ${errBody}` };
    }

    const data = (await res.json()) as { commit: { sha: string } };
    return { ok: true, commitSha: data.commit.sha };
  } catch (err) {
    return { ok: false, error: String(err) };
  }
}

/**
 * Delete a file from the GitHub repo.
 * @param filePath  Repo-relative path
 * @param commitMessage  Git commit message
 */
export async function deleteFileFromGitHub(
  filePath: string,
  commitMessage: string
): Promise<WriteResult> {
  try {
    const { token, repo, branch } = getConfig();
    const sha = await getFileSha(token, repo, branch, filePath);

    if (!sha) {
      return { ok: false, error: `File not found: ${filePath}` };
    }

    const url = `https://api.github.com/repos/${repo}/contents/${filePath}`;
    const res = await fetch(url, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github+json',
        'Content-Type': 'application/json',
        'X-GitHub-Api-Version': '2022-11-28',
      },
      body: JSON.stringify({ message: commitMessage, sha, branch }),
    });

    if (!res.ok) {
      const errBody = await res.text();
      return { ok: false, error: `GitHub DELETE failed (${res.status}): ${errBody}` };
    }

    const data = (await res.json()) as { commit: { sha: string } };
    return { ok: true, commitSha: data.commit.sha };
  } catch (err) {
    return { ok: false, error: String(err) };
  }
}
