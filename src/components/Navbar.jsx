import { useState } from "react";
import { Menu, X, ShoppingBag, Shirt } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Collections", href: "#collections" },
    { label: "Quality", href: "#quality" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="backdrop-blur supports-[backdrop-filter]:bg-white/40 bg-white/60 dark:bg-slate-900/60 border-b border-white/20 dark:border-slate-800/60">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-black text-white dark:bg-white dark:text-black grid place-items-center shadow-sm">
                <Shirt className="w-5 h-5" />
              </div>
              <span className="text-xl font-semibold tracking-wider">URAZ</span>
            </a>

            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="text-sm text-slate-700 dark:text-slate-200 hover:text-black dark:hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button className="relative p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition" aria-label="Cart">
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 text-[10px] font-semibold bg-black text-white dark:bg-white dark:text-black rounded-full px-1.5 py-0.5">0</span>
              </button>
              <button className="md:hidden p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
                {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </nav>

        {open && (
          <div className="md:hidden px-6 pb-4 space-y-2">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="block py-2 text-slate-800 dark:text-slate-200">
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
