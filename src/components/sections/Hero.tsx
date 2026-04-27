import { ArrowRight, Mail } from "lucide-react";
import { Logo } from "@/components/Logo";

export const Hero = () => {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-36 pb-24 md:pt-44 md:pb-36"
    >
      {/* Background layers */}
      <div className="absolute inset-0 -z-10 grid-bg" aria-hidden />
      <div className="absolute inset-0 -z-10 bg-gradient-radial" aria-hidden />
      <div
        aria-hidden
        className="absolute -top-32 -left-24 -z-10 h-[480px] w-[480px] rounded-full bg-brand-orange/30 blur-3xl animate-float-slow"
      />
      <div
        aria-hidden
        className="absolute -bottom-32 -right-24 -z-10 h-[520px] w-[520px] rounded-full bg-brand-purple/30 blur-3xl animate-float-slower"
      />

      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <div className="reveal flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-brand opacity-30 blur-2xl" />
              <div className="relative glass rounded-3xl p-5">
                <Logo size={88} withGlow />
              </div>
            </div>
          </div>

          <p className="reveal font-mono text-xs md:text-sm text-brand-orange/90 tracking-[0.3em] uppercase mb-6">
            &lt;/&gt; Full Stack Developer
          </p>

          <h1 className="reveal font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance">
            <span className="text-foreground">Weldercris</span>
            <span className="gradient-text animate-gradient-shift bg-[length:200%_200%]"> Ribeiro</span>
          </h1>

          <p className="reveal mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Desenvolvendo soluções modernas para{" "}
            <span className="text-foreground font-medium">web</span> e{" "}
            <span className="text-foreground font-medium">negócios</span>.
          </p>

          <div className="reveal mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projetos"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-white shadow-glow-orange hover:shadow-glow-mix transition-all hover:-translate-y-0.5"
            >
              Ver Projetos
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contato"
              className="group inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 text-sm font-semibold text-foreground hover:border-brand-purple/60 hover:shadow-glow-purple transition-all hover:-translate-y-0.5"
            >
              <Mail size={16} />
              Entrar em Contato
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
