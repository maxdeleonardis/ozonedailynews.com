import { supabase, Subscriber } from './supabase';

// Subscribe email to newsletter
export async function subscribeToNewsletter(
  email: string,
  categories?: string[],
  frequency: 'daily' | 'weekly' | 'never' = 'weekly'
): Promise<Subscriber | null> {
  const { data, error } = await supabase
    .from('subscribers')
    .insert([
      {
        email,
        is_active: true,
        preferences: {
          categories: categories || ['News', 'Technology', 'Business'],
          frequency,
        },
      },
    ])
    .select()
    .single();

  if (error) {
    // Check if already subscribed
    if (error.code === '23505') {
      // Unique constraint violation
      return await updateSubscriberPreferences(email, { frequency, categories });
    }
    throw error;
  }

  return data;
}

// Update subscriber preferences
export async function updateSubscriberPreferences(
  email: string,
  updates: { frequency?: string; categories?: string[] }
) {
  const { data, error } = await supabase
    .from('subscribers')
    .update({
      preferences: {
        ...(updates.frequency && { frequency: updates.frequency }),
        ...(updates.categories && { categories: updates.categories }),
      },
    })
    .eq('email', email)
    .select()
    .single();

  if (error) throw error;
  return data;
}

// Unsubscribe from newsletter
export async function unsubscribeFromNewsletter(email: string) {
  const { error } = await supabase
    .from('subscribers')
    .update({ is_active: false })
    .eq('email', email);

  if (error) throw error;
  return true;
}

// Get subscriber count
export async function getSubscriberCount(): Promise<number> {
  const { count, error } = await supabase
    .from('subscribers')
    .select('*', { count: 'exact' })
    .eq('is_active', true);

  if (error) throw error;
  return count || 0;
}
