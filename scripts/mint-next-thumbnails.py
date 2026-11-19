import json
import os
import urllib.parse
import urllib.request

SATORI_BASE = "https://satori-neon.vercel.app"
TOKEN = "satori_0c00f62203a65529f7dac2f75b74e684f3806484f23724a3"

ARTICLES = [
    {
        "slug": "eagles-hunt-baboons-ancient-humans-prey-2026",
        "title": "Eagles that hunt baboons may explain ancient human predators",
        "subtitle": "Field observations of large raptors hunting baboons are shedding new light on prehistoric predators of early human ancestors.",
        "layout": "cinematic",
        "accent": "#0d9488",
        "overlay": "75",
    },
]

os.makedirs("public/thumbnails", exist_ok=True)

for article in ARTICLES:
    payload = json.dumps({
        "network": "ozone",
        "slug": article["slug"],
        "title": article["title"],
        "subtitle": article["subtitle"],
        "layout": article["layout"],
    }).encode()
    quick_request = urllib.request.Request(
        f"{SATORI_BASE}/api/v1/quick-generate",
        data=payload,
        headers={
            "Content-Type": "application/json",
            "Authorization": f"Bearer {TOKEN}",
        },
        method="POST",
    )
    with urllib.request.urlopen(quick_request, timeout=60) as response:
        quick_data = json.loads(response.read())

    image_url = quick_data.get("image_url", "")
    if not image_url:
        raise RuntimeError(f"No image_url returned for {article['slug']}")

    params = urllib.parse.urlencode({
        "network": "ozone",
        "title": article["title"],
        "subtitle": article["subtitle"],
        "image_url": image_url,
        "layout": article["layout"],
        "accent": article["accent"],
        "overlay": article["overlay"],
    })
    with urllib.request.urlopen(f"{SATORI_BASE}/api/v1/generate?{params}", timeout=120) as response:
        image_bytes = response.read()

    output = f"public/thumbnails/{article['slug']}.jpg"
    with open(output, "wb") as handle:
        handle.write(image_bytes)
    print(f"Saved {output} ({len(image_bytes) // 1024} KB)")
