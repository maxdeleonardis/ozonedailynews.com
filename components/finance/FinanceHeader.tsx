import Link from "next/link";

export default function FinanceHeader() {
  return (
    <div className="bg-black text-white border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex gap-6 overflow-x-auto pb-1 hide-scrollbar">
          <Link href="/finance" className="text-white font-medium border-b-2 border-blue-500 pb-1 whitespace-nowrap">
            Markets
          </Link>
          <Link href="/finance?tab=news" className="text-gray-400 hover:text-white transition-colors pb-1 whitespace-nowrap">
            Financial News
          </Link>
          <Link href="/search?q=economy" className="text-gray-400 hover:text-white transition-colors pb-1 whitespace-nowrap">
            Economy
          </Link>
        </nav>
      </div>
    </div>
  );
}
