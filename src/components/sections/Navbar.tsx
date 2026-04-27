import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#tecnologias", label: "Tecnologias" },
  { href: "#projetos", label: "Projetos" },
  { href: "#servicos", label: "Serviços" },
  { href: "#contato", label: "Contato" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container px-4">
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 ${
            scrolled ? "glass-strong shadow-glow-mix" : "glass"
          }`}
        >
          <a href="#top" className="flex items-center gap-2.5 group">
            <Logo size={36} />
            <span className="font-display text-lg font-semibold tracking-tight">
              Weldercris<span className="gradient-text">.dev</span>
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="relative inline-flex items-center px-3.5 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors after:absolute after:left-3.5 after:right-3.5 after:bottom-1 after:h-px after:bg-gradient-brand after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contato"
            className="hidden md:inline-flex items-center rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-white shadow-glow-orange hover:shadow-glow-mix transition-shadow"
          >
            Contato
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg glass"
            aria-label="Abrir menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* Mobile drawer */}
        <div
          className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-500 ${
            open ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="glass-strong rounded-2xl p-2 flex flex-col">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground hover:bg-white/5 hover:text-foreground transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};
