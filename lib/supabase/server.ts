// Placeholder for Supabase server client
export function createClient() {
  const chainable = {
    eq: (column: string, value: any) => chainable,
    single: () => Promise.resolve({ data: {} as any, error: null })
  };

  return {
    from: (table: string) => ({
      select: (columns?: string) => chainable,
      insert: (data: any) => ({
        select: () => ({
          single: () => Promise.resolve({ data: {} as any, error: null })
        })
      }),
      update: (data: any) => ({
        eq: (column: string, value: any) => Promise.resolve({ data: {} as any, error: null })
      }),
      delete: () => ({
        eq: (column: string, value: any) => Promise.resolve({ error: null })
      })
    })
  };
}
