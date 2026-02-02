import Link from "next/link";

export default function TechHeader() {
  const models = [
    { name: "Claude 4.5", href: "#" },
    { name: "GPT-5", href: "#" },
    { name: "Gemini 2.0", href: "#" },
    { name: "Llama 4", href: "#" },
    { name: "Grok 1.5", href: "#" },
  ];

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between py-5">
          {/* Tagline - Left Aligned */}
          <div className="mb-4 md:mb-0">
            <Link href="/technology" className="group block">
              <p className="font-mono text-[10px] text-gray-500 tracking-[0.25em] uppercase font-medium">
                Systems • Intelligence • Infrastructure • Robotics
              </p>
            </Link>
          </div>

          {/* Navigation - Right Aligned (or below on mobile) */}
          <nav>
            <ul className="flex flex-wrap gap-6">
              {models.map((model) => (
                <li key={model.name}>
                  <Link
                    href={model.href}
                    className="font-mono text-[11px] font-medium text-gray-500 hover:text-black transition-colors uppercase tracking-wider"
                  >
                    {model.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
