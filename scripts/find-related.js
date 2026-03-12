const fs = require('fs');
const reg = fs.readFileSync('lib/content-registry.ts', 'utf8');
const re = /slug:\s*['"`]([^'"`]+)['"`]/g;
let m, r = [];
while ((m = re.exec(reg)) !== null) r.push(m[1]);
const terms = ['epic', 'gdc', 'disney', 'entertainment', 'fortnite', 'video-games'];
terms.forEach(t => {
  const found = r.filter(s => s.includes(t));
  if (found.length) console.log('\n' + t + ':', found);
});
