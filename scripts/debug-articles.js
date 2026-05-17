const fs = require('fs');
const files = fs.readdirSync('./content/static/articles/').filter(f => f.endsWith('.json') && f[0] !== '_');
const articles = [];
for (const f of files) {
  try {
    const d = JSON.parse(fs.readFileSync('./content/static/articles/'+f, 'utf8'));
    articles.push({ file: f, slug: d.slug, url: d.url, published_at: d.published_at, publish_date: d.publish_date });
  } catch(e) {
    console.log('JSON PARSE ERROR:', f, e.message.slice(0,60));
  }
}
articles.sort((a,b) => new Date(b.published_at||0) - new Date(a.published_at||0));
console.log('\nTop 15 newest articles:');
articles.slice(0,15).forEach(a => console.log(a.published_at, '|', a.slug || a.file));
console.log('\nArticles missing published_at:', articles.filter(a => !a.published_at).length);
