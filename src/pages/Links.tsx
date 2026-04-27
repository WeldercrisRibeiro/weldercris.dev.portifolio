import { Github, Linkedin, MessageCircle, Globe, ArrowRight } from "lucide-react";
import { Logo } from "@/components/Logo";
import { CustomCursor } from "@/components/CustomCursor";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const links = [
  {
    title: "Meu Portfólio",
    description: "Conheça meus projetos e habilidades",
    icon: Globe,
    href: "/",
    external: false,
  },
  {
    title: "GitHub",
    description: "Veja meus repositórios e códigos",
    icon: Github,
    href: "https://github.com/WeldercrisRibeiro",
    external: true,
  },
  {
    title: "LinkedIn",
    description: "Conecte-se comigo profissionalmente",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/weldercris-ribeiro/",
    external: true,
  },
  {
    title: "WhatsApp",
    description: "Vamos conversar sobre seu projeto",
    icon: MessageCircle,
    href: "https://wa.me/5585991970045",
    external: true,
  },
];

const Links = () => {
  useScrollReveal();

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-clip flex flex-col items-center py-20 px-6">
      <CustomCursor />
      
      {/* Background layers */}
      <div className="absolute inset-0 -z-10 grid-bg opacity-40" aria-hidden />
      <div className="absolute inset-0 -z-10 bg-gradient-radial" aria-hidden />
      <div
        aria-hidden
        className="absolute top-1/4 -left-24 -z-10 h-[400px] w-[400px] rounded-full bg-brand-orange/20 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute bottom-1/4 -right-24 -z-10 h-[400px] w-[400px] rounded-full bg-brand-purple/20 blur-3xl"
      />

      <div className="w-full max-w-md mx-auto flex flex-col items-center">
        {/* Profile / Logo Section */}
        <div className="reveal mb-8 text-center">
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 rounded-full bg-gradient-brand opacity-30 blur-2xl" />
            <div className="relative glass rounded-full p-1.5 gradient-border overflow-hidden">
              <img 
                src="https://github.com/WeldercrisRibeiro.png" 
                alt="Weldercris Ribeiro"
                className="h-24 w-24 rounded-full object-cover"
              />
            </div>
          </div>
          <h1 className="font-display text-3xl font-bold tracking-tight mb-2">
            Weldercris <span className="gradient-text">Ribeiro</span>
          </h1>
          <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
            &lt;/&gt; Full Stack Developer
          </p>
        </div>

        {/* Links Section */}
        <div className="w-full space-y-4">
          {links.map((link, i) => (
            <a
              key={link.title}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
              className="reveal group flex items-center gap-4 rounded-2xl glass gradient-border p-4 hover:-translate-y-1 transition-all duration-300"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-brand-soft border border-white/10 group-hover:shadow-glow-mix transition-shadow">
                <link.icon size={20} className="text-brand-orange" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-foreground group-hover:gradient-text transition-colors">
                  {link.title}
                </div>
                <div className="text-xs text-muted-foreground truncate">
                  {link.description}
                </div>
              </div>
              <ArrowRight
                size={16}
                className="text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all"
              />
            </a>
          ))}
        </div>

        {/* Footer info */}
        <div className="reveal mt-16 text-center">
          <p className="text-xs text-muted-foreground font-mono">
            © {new Date().getFullYear()} weldercris.dev
          </p>
        </div>
      </div>
    </div>
  );
};

export default Links;
