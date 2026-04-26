import { Code2, Sparkles, Rocket } from "lucide-react";

const stats = [
  { label: "Stacks dominadas", value: "8+" },
  { label: "Projetos entregues", value: "20+" },
  { label: "Anos de código", value: "3+" },
];

export const About = () => {
  return (
    <section id="sobre" className="relative py-24 md:py-32">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="reveal">
            <p className="font-mono text-xs text-brand-purple tracking-[0.3em] uppercase mb-4">
              // sobre mim
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6 text-balance">
              Código com <span className="gradient-text">propósito</span>,
              design com intenção.
            </h2>
            <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
              <p>
                Sou desenvolvedor focado em criar{" "}
                <span className="text-foreground font-medium">sistemas modernos</span>,{" "}
                <span className="text-foreground font-medium">sites profissionais</span>,
                automações e soluções digitais que realmente movem o ponteiro do negócio.
              </p>
              <p>
                Combino performance, estética e arquitetura limpa para entregar produtos
                rápidos, escaláveis e memoráveis — do primeiro pixel ao último deploy.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {["Performance", "Clean Code", "UX-first", "Escalável"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="reveal">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-brand opacity-20 blur-3xl rounded-3xl" />
              <div className="relative glass rounded-3xl p-8 gradient-border">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-brand-orange/80" />
                    <span className="h-3 w-3 rounded-full bg-brand-purple/80" />
                    <span className="h-3 w-3 rounded-full bg-white/30" />
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">~/weldercris.dev</span>
                </div>

                <div className="space-y-4 font-mono text-sm">
                  <div>
                    <span className="text-brand-purple">const</span>{" "}
                    <span className="text-brand-orange">dev</span> = {`{`}
                  </div>
                  <div className="pl-5 text-muted-foreground">
                    name: <span className="text-foreground">'Weldercris'</span>,
                  </div>
                  <div className="pl-5 text-muted-foreground">
                    role: <span className="text-foreground">'Full Stack Developer'</span>,
                  </div>
                  <div className="pl-5 text-muted-foreground">
                    focus: <span className="text-foreground">['web', 'sistemas', 'automação']</span>,
                  </div>
                  <div className="pl-5 text-muted-foreground">
                    available: <span className="text-brand-orange">true</span>,
                  </div>
                  <div>{`}`}</div>
                </div>

                <div className="mt-8 grid grid-cols-3 gap-3 pt-6 border-t border-white/10">
                  {stats.map((s, i) => {
                    const Icon = [Code2, Sparkles, Rocket][i];
                    return (
                      <div key={s.label} className="text-center">
                        <Icon size={18} className="mx-auto mb-2 text-brand-orange" />
                        <div className="font-display text-2xl font-bold gradient-text">
                          {s.value}
                        </div>
                        <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">
                          {s.label}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
