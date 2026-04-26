import { Logo } from "@/components/Logo";

export const Footer = () => {
  return (
    <footer className="relative border-t border-white/5 py-10">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#top" className="flex items-center gap-2.5">
            <Logo size={28} />
            <span className="font-display text-sm font-semibold">
              Weldercris<span className="gradient-text">.dev</span>
            </span>
          </a>

          <nav className="flex items-center gap-5 text-sm text-muted-foreground">
            <a href="#sobre" className="hover:text-foreground transition-colors">Sobre</a>
            <a href="#projetos" className="hover:text-foreground transition-colors">Projetos</a>
            <a href="#servicos" className="hover:text-foreground transition-colors">Serviços</a>
            <a href="#contato" className="hover:text-foreground transition-colors">Contato</a>
          </nav>

          <p className="text-xs text-muted-foreground font-mono">
            © {new Date().getFullYear()} Weldercris.dev — feito com{" "}
            <span className="text-brand-orange">café</span> e{" "}
            <span className="text-brand-purple">código</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
