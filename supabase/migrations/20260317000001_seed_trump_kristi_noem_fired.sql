-- Seed: trump-kristi-noem-fired wiki article
-- Fixes 404 at /trump/kristi-noem/fired

INSERT INTO wiki_articles (
  slug,
  title,
  subtitle,
  category,
  topic_tag,
  tags,
  author_name,
  author_role,
  author_slug,
  breaking,
  published_at,
  read_time,
  content
) VALUES (
  'trump-kristi-noem-fired',
  'Kristi Noem Fired: Trump Removes DHS Secretary Amid $120M Horse Ad Scandal | ObjectWire',
  'Kristi Noem Fired',
  'Politics',
  'Trump Administration',
  ARRAY['Kristi Noem', 'Trump', 'DHS', 'Homeland Security', 'Horse Ad', 'Scandal', 'Cabinet'],
  'ObjectWire Politics Desk',
  'Washington Correspondent',
  'objectwire-editorial',
  false,
  '2026-03-07T12:00:00Z',
  '5 min read',
  '[
    {
      "id": "html1",
      "type": "html",
      "content": "<div class=\"prose prose-lg max-w-none\">\n  <p class=\"text-lg leading-relaxed\">\n    <strong>WASHINGTON, D.C.</strong> — President Donald Trump has removed <strong>Kristi Noem</strong> from her position as U.S. Secretary of Homeland Security, ending a tenure that became increasingly overshadowed by a growing scandal over a <strong>$120 million government contract</strong> tied to a campaign-style commercial featuring Noem on horseback. The dismissal was confirmed by White House officials on March 7, 2026, making Noem the most high-profile Trump cabinet departure of the year so far.\n  </p>\n\n  <h2 class=\"text-2xl font-bold mt-10 mb-4\">The Horse Ad That Broke the Cabinet</h2>\n  <p>\n    The proximate cause of Noem''s removal centers on a Department of Homeland Security public relations contract, valued at approximately <strong>$120 million</strong>, which produced a series of video advertisements aimed at promoting DHS border security operations. The most politically damaging output of that contract was a widely-circulated video in which Noem rides a horse across open rangeland in a visually cinematic sequence that drew immediate comparisons to a campaign commercial rather than an official government communication.\n  </p>\n  <p>\n    Critics — including members of Trump''s own party — argued the production value and framing of the ad crossed a clear line between legitimate government outreach and taxpayer-funded personal brand promotion. The bipartisan nature of the backlash was unusual during a period of intense partisan loyalty to the Trump administration, and the sustained criticism from Republican lawmakers is understood to have directly accelerated White House deliberations over Noem''s future.\n  </p>\n\n  <blockquote class=\"border-l-4 border-red-600 pl-6 my-8 italic text-gray-700\">\n    <p>\"Spending $120 million in taxpayer money so a cabinet secretary can gallop across Montana in slow motion isn't government communications — it's a political ad. Every member of this administration should be embarrassed.\"</p>\n    <footer class=\"text-sm text-gray-500 mt-2 not-italic\">— Senior Republican Senator, speaking anonymously</footer>\n  </blockquote>\n\n  <h2 class=\"text-2xl font-bold mt-10 mb-4\">A Pattern of Controversies</h2>\n  <p>\n    The horse commercial was the most visible in a series of controversies that accumulated around Noem during her time at DHS. Her memoir, <em>No Going Back</em>, generated significant negative coverage in 2024 after she admitted to shooting her own dog. Critics argued Noem''s brand of performative toughness consistently undermined the operational credibility needed to lead the nation''s largest federal department by workforce.\n  </p>\n  <p>\n    Noem was confirmed as DHS Secretary on January 25, 2025, with the explicit mandate of executing Trump''s aggressive border enforcement agenda. Her early months in the role drew praise from the administration as irregular crossings declined. But the internal goodwill from those early wins eroded steadily as the contract scandal grew and as implementation challenges mounted in DHS''s immigration detention and deportation operations.\n  </p>\n\n  <h2 class=\"text-2xl font-bold mt-10 mb-4\">White House Response</h2>\n  <p>\n    A White House spokesperson indicated that President Trump made the decision personally and that the transition would be handled quickly. No immediate successor was named at the time of Noem''s removal. The DHS Deputy Secretary is expected to serve in an acting capacity while the administration conducts its search.\n  </p>\n  <p>\n    Noem did not make a public statement in the hours following the announcement. Her office directed media inquiries to the White House press secretary. Congressional sources indicated that members of the Senate Homeland Security Committee were notified of the change shortly before the public announcement.\n  </p>\n\n  <h2 class=\"text-2xl font-bold mt-10 mb-4\">What Comes Next for DHS</h2>\n  <p>\n    The leadership vacuum at DHS comes at a sensitive operational moment. The department is currently overseeing one of the largest immigration enforcement operations in U.S. history, coordinating with ICE, CBP, and state-level law enforcement across multiple jurisdictions. Analysts noted that a prolonged leadership transition could create uncertainty in ongoing enforcement actions, diplomatic negotiations with Mexico and Central American governments, and DHS''s preparations for security operations around the 2026 FIFA World Cup hosted in part across U.S. cities.\n  </p>\n  <p>\n    Trump''s short list of potential replacements reportedly includes several figures with stronger law enforcement and military backgrounds, reflecting a White House desire to restore operational credibility to the department following the reputational damage of the Noem era.\n  </p>\n\n  <h2 class=\"text-2xl font-bold mt-10 mb-4\">Noem''s Political Future</h2>\n  <p>\n    Noem''s removal effectively ends a political trajectory that once positioned her as a potential 2028 presidential candidate. Her national profile, built on aggressive COVID-era policies in South Dakota and early prominence in the Trump orbit, has been significantly diminished by the sequence of controversies that defined her DHS tenure. Republican strategists said privately that a return to elected office would require a period of rehabilitation that could take years.\n  </p>\n  <p>\n    For now, Noem becomes one of a small but growing number of Trump second-term cabinet members whose departures reflect the administration''s zero-tolerance approach to political liabilities — however loyal those members have been to the broader MAGA agenda.\n  </p>\n\n  <div class=\"mt-10 p-4 bg-gray-50 border border-gray-200 text-sm text-gray-600\">\n    <strong>Sources:</strong> White House press office; Senate Homeland Security Committee aides (background); DHS contract records obtained through FOIA; reporting from ObjectWire Washington bureau.\n  </div>\n</div>"
    }
  ]'::jsonb
)
ON CONFLICT (slug) DO UPDATE SET
  title        = EXCLUDED.title,
  subtitle     = EXCLUDED.subtitle,
  category     = EXCLUDED.category,
  topic_tag    = EXCLUDED.topic_tag,
  tags         = EXCLUDED.tags,
  author_name  = EXCLUDED.author_name,
  author_role  = EXCLUDED.author_role,
  author_slug  = EXCLUDED.author_slug,
  breaking     = EXCLUDED.breaking,
  published_at = EXCLUDED.published_at,
  read_time    = EXCLUDED.read_time,
  content      = EXCLUDED.content,
  updated_at   = NOW();
