import { createClient as createSupabaseClient } from '@supabase/supabase-js';

// ANSI colours for dev-console visibility
const C = {
  reset:  '\x1b[0m',
  cyan:   '\x1b[36m',
  yellow: '\x1b[33m',
  green:  '\x1b[32m',
  red:    '\x1b[31m',
  dim:    '\x1b[2m',
};

type WriteOp = 'INSERT' | 'UPSERT' | 'UPDATE' | 'DELETE';

function logWrite(op: WriteOp, table: string, payload?: unknown) {
  if (process.env.NODE_ENV !== 'development') return;
  const ts = new Date().toISOString().replace('T', ' ').slice(0, 19);
  const opColour = op === 'INSERT' || op === 'UPSERT' ? C.green
                 : op === 'UPDATE' ? C.yellow
                 : C.red;
  const preview = payload
    ? ` ${C.dim}${JSON.stringify(payload).slice(0, 120)}${C.reset}`
    : '';
  console.log(
    ` ${C.cyan}[supabase]${C.reset} ${opColour}${op}${C.reset} ${C.cyan}→ ${table}${C.reset}${preview} ${C.dim}(${ts})${C.reset}`
  );
}

/**
 * Server-side Supabase client (anon key).
 * Used for reading published articles and writing new ones (RLS allows anon insert/update).
 * Awaitable so call sites can use: const supabase = await createClient()
 *
 * In development, all write operations (insert/upsert/update/delete) are
 * automatically logged to the server console so you can see DB activity in
 * `npm run dev` output in real time.
 */
export async function createClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    throw new Error(
      'Missing Supabase env vars. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local'
    );
  }

  const client = createSupabaseClient(url, key);

  if (process.env.NODE_ENV !== 'development') return client;

  // Wrap .from() so write builder methods emit console logs
  const originalFrom = client.from.bind(client);
  client.from = (table: string) => {
    const builder = originalFrom(table);

    const _insert = builder.insert.bind(builder);
    builder.insert = (values: unknown, opts?: unknown) => {
      logWrite('INSERT', table, values);
      return (_insert as (v: unknown, o?: unknown) => ReturnType<typeof builder.insert>)(values, opts);
    };

    const _upsert = builder.upsert.bind(builder);
    builder.upsert = (values: unknown, opts?: unknown) => {
      logWrite('UPSERT', table, values);
      return (_upsert as (v: unknown, o?: unknown) => ReturnType<typeof builder.upsert>)(values, opts);
    };

    const _update = builder.update.bind(builder);
    builder.update = (values: unknown, opts?: unknown) => {
      logWrite('UPDATE', table, values);
      return (_update as (v: unknown, o?: unknown) => ReturnType<typeof builder.update>)(values, opts);
    };

    const _delete = builder.delete.bind(builder);
    builder.delete = (opts?: unknown) => {
      logWrite('DELETE', table, undefined);
      return (_delete as (o?: unknown) => ReturnType<typeof builder.delete>)(opts);
    };

    return builder;
  };

  return client;
}
