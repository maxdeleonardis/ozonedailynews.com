# OzoneNews | Content Roadmap & Topic Tracker

**Last updated:** September 16, 2026
**Registry:** 197 total entries
**Author:** Max DeLeonardis (Founder & Publisher)

---

## Site Identity

OzoneNews is a **deep science and Earth science niche** news network. We cover:
- Space Exploration
- Earth Science (Geology, Paleontology)
- Climate Science
- Oceanography
- Archaeology
- Physics & Astronomy

Sister sites cover other verticals: **BasilNews** (finance, markets, economy), **ObsidianPaper** (cybersecurity).

---

## Hub Pages Status

| Route | Hub Type | Articles | Status |
|---|---|---|---|
| `/space` | ❌ Missing | 83 tagged | **NEED: ArticlePage JSON + route** |
| `/rockets` | ❌ Missing | 37 tagged | **NEED: ArticlePage JSON + route** |
| `/science` | ✅ Grid page | 65 | Good |
| `/earth` | ✅ ArticlePage | ~30 | Good |
| `/oceans` | ✅ ArticlePage | ~15 | Good |
| `/climate` | ✅ ArticlePage | ~20 | Good |
| `/geology` | ✅ ArticlePage | ~5 | Good |
| `/archaeology` | ✅ ArticlePage | ~5 | Good |
| `/nasa` | ✅ ArticlePage | 4 | Good |
| `/engineering` | ❌ Missing | 2 tagged | **NEED: hub + content** |
| `/defense` | ❌ Missing | 0 tagged | **NEED: hub + content** |
| `/policy` | ❌ Missing | 4 tagged | **NEED: hub + content** |
| `/university` | ✅ Grid page | 1 | Good |

---

## Missing Hub Pages to Create

### 1. `/space` — ArticlePage JSON
- 83 articles already tagged with space keywords
- Filter by: slug starts with `/space/` or `/nasa/` or tags contain space/NASA/telescope/orbit/etc.
- Info box: key space statistics, related coverage links
- Thumbnail: cinematic, cyan accent

### 2. `/rockets` — ArticlePage JSON
- 37 articles tagged with rocket/launch/propulsion keywords
- Covers: Falcon 9, Starship, New Glenn, launch vehicles, propulsion systems
- Info box: active launch vehicles, launch statistics, related coverage
- Thumbnail: cinematic, blue accent

### 3. `/engineering` — ArticlePage JSON
- Only 2 articles currently tagged
- Covers: aerospace engineering, propulsion, materials science, robotics, semiconductors
- Info box: engineering disciplines, related coverage
- Thumbnail: cinematic, violet accent

### 4. `/defense` — ArticlePage JSON
- 0 articles currently
- Covers: space defense, military space, cybersecurity, orbital security
- Info box: defense topics, related coverage
- Thumbnail: breaking, red accent

### 5. `/policy` — ArticlePage JSON
- 4 articles currently
- Covers: science funding, space regulation, climate policy, FAA, NASA policy
- Info box: policy topics, related coverage
- Thumbnail: standard, rose accent

---

## Content to Write (by Hub)

### Space — Next Articles
- JWST latest discovery update
- Artemis III mission status (crew announcement, timeline)
- Commercial space station progress (Axiom, Orbital Reef)
- Mars sample return mission update
- Solar system exploration (Europa Clipper, Dragonfly)
- Exoplanet atmosphere discoveries

### Rockets — Next Articles
- Starship flight test results
- Falcon 9 reuse milestones
- New Glenn progress and launch timeline
- Rocket Lab Neutron development
- Small launch vehicle market update
- Propulsion technology (methane, nuclear thermal, electric)

### Engineering — Next Articles (hub + content needed)
- Aerospace materials: heat shields, composites, 3D-printed rocket parts
- Autonomous landing systems and GNC
- Satellite bus manufacturing
- Nuclear propulsion for deep space
- Robotics for space assembly

### Defense — Next Articles (hub + content needed)
- U.S. Space Force budget and missions
- Anti-satellite weapons and orbital warfare
- Cybersecurity for space assets
- Space-based missile tracking
- Orbital debris mitigation policy

### Policy — Next Articles (hub + content needed)
- NASA budget 2027 analysis
- FAA launch licensing reform
- Artemis Accords international signatories
- Commercial space regulatory framework
- Science funding (NSF, DOE, NASA)

### Earth Science — Next Articles
- Yellowstone supervolcano monitoring update
- Earthquake prediction AI models
- Deep mantle plume discoveries
- Plate tectonics new model
- Permafrost carbon feedback
- Atmospheric river dynamics
- Cloud seeding effectiveness

### Oceans — Next Articles
- Deep sea mining regulations
- Mariana Trench new species
- AMOC collapse risk update
- Ocean deoxygenation data
- Bioluminescence research
- Marine protected area effectiveness

### Climate — Next Articles
- Global temperature 2026 update
- Ice sheet dynamics (Greenland, Antarctica)
- Albedo feedback measurement
- Climate model improvements
- Carbon capture technology

### Archaeology — Next Articles
- Neanderthal DNA discoveries
- Egyptian tomb excavations
- Maya civilization LiDAR findings
- Underwater archaeology
- Ancient DNA analysis

---

## Nav Header (Current)

```
Space · Earth · Oceans · Climate · Geology · Archaeology · Science
```

When `/space`, `/rockets`, `/engineering`, `/defense`, `/policy` hubs are created, add to nav:
```
Space · Rockets · Earth · Oceans · Climate · Geology · Archaeology · Science · Policy
```

---

## Quick Fixes Completed (Sept 16)

- [x] Backfilled 99 empty descriptions and tags in registry
- [x] Footer links now blue and underlined
- [x] `/about` rewritten as science news network with Ph.D. credentials
- [x] `/editorial-standards` rewritten for scientific sourcing rigor
- [x] All articles reassigned to Max DeLeonardis
- [x] Created `/oceans`, `/climate`, `/geology`, `/archaeology` hub pages
- [x] Updated nav header to Earth science focus

---

## Next Session — Start Here

1. Create `/space` ArticlePage JSON + route page
2. Create `/rockets` ArticlePage JSON + route page
3. Create `/engineering` ArticlePage JSON + route page
4. Create `/defense` ArticlePage JSON + route page
5. Create `/policy` ArticlePage JSON + route page
6. Write first article for Engineering (e.g., aerospace materials)
7. Write first article for Defense (e.g., Space Force update)
8. Write first article for Policy (e.g., NASA budget)
9. Run `npm run wiki:sync -- --write` after each
10. Mint Satori thumbnails for each new hub
11. Run `npm run build` to verify
12. Run `npm run ping:indexnow` after publishing