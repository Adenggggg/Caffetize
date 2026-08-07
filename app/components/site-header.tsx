import { Link } from "react-router";
import { ShoppingBag } from "lucide-react";

const NAV = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Our Story", href: "/story" },
  { label: "Locations", href: "/locations" },
];

export function SiteHeader() {
  return (
    <header className="flex items-center justify-between px-6 md:px-10 py-5 border-b border-border bg-cream/95 backdrop-blur sticky top-0 z-10">
      <Link to="/" className="flex items-center gap-2 font-display text-xl font-semibold">
        <span className="w-7 h-7 rounded-md bg-clay text-cream flex items-center justify-center text-xs">
          ☕
        </span>
        Caffetize
      </Link>

      <nav className="hidden md:flex items-center gap-8 text-sm text-ink/80">
        {NAV.map((item) => (
          <Link key={item.href} to={item.href} className="hover:text-ink transition-colors">
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <Link to="/checkout" className="relative" aria-label="View order">
          <ShoppingBag className="w-5 h-5 text-ink/80" />
          <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-olive text-[10px] text-white flex items-center justify-center">
            0
          </span>
        </Link>
        <div className="w-8 h-8 rounded-full bg-ink/20" />
      </div>
    </header>
  );
}
