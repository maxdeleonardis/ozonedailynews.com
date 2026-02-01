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
        <div className="flex flex-col md:flex-row md:items-end justify-between py-8 md:py-10">
          {/* Brand - Left Aligned, Clean */}
          <div className="mb-8 md:mb-0">
            <Link href="/technology" className="group block">
              <h1 className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-black leading-none group-hover:opacity-80 transition-opacity">
                TECHNOLOGY
              </h1>
              <p className="font-mono text-[10px] text-gray-400 mt-3 tracking-[0.2em] uppercase">
                Intelligence • Infrastructure • Software • Robotics
              </p>
            </Link>
          </div>

          {/* Navigation - Right Aligned (or below on mobile) */}
          <nav className="pb-1">
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
