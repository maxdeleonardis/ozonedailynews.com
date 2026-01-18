import * as dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

// Load environment variables from .env.local FIRST
dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ Missing environment variables in .env.local');
  console.error('   NEXT_PUBLIC_SUPABASE_URL:', supabaseUrl ? '✓' : '✗');
  console.error('   NEXT_PUBLIC_SUPABASE_ANON_KEY:', supabaseAnonKey ? '✓' : '✗');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function verifySetup() {
  console.log('🔍 Verifying Supabase setup...\n');

  // Check blog_posts table
  console.log('1. Checking blog_posts table...');
  const { data: posts, error: postsError } = await supabase
    .from('blog_posts')
    .select('count')
    .limit(1);

  if (postsError) {
    console.error('❌ Error accessing blog_posts table:', postsError.message);
  } else {
    console.log('✅ blog_posts table exists and is accessible\n');
  }

  // Check storage bucket
  console.log('2. Checking blog-images storage bucket...');
  const { data: buckets, error: bucketsError } = await supabase
    .storage
    .listBuckets();

  if (bucketsError) {
    console.error('❌ Error accessing storage:', bucketsError.message);
  } else {
    const blogImagesBucket = buckets.find(b => b.id === 'blog-images');
    if (blogImagesBucket) {
      console.log('✅ blog-images bucket exists');
      console.log(`   - Public: ${blogImagesBucket.public}`);
      console.log(`   - Size limit: ${blogImagesBucket.file_size_limit ? (blogImagesBucket.file_size_limit / 1024 / 1024) + 'MB' : 'unlimited'}`);
    } else {
      console.log('⚠️  blog-images bucket not found');
    }
  }

  console.log('\n✨ Setup verification complete!');
  console.log('\n📝 Next steps:');
  console.log('1. Start dev server: npm run dev');
  console.log('2. Visit: http://localhost:3000/admin/editor');
  console.log('3. Create your first blog post!');
}

verifySetup().catch(console.error);
