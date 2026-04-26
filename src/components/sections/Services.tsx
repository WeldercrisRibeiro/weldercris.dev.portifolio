import { Globe, Settings2, Workflow } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Desenvolvimento Web",
    description: "Sites e landing pages modernos, rápidos e otimizados para conversão. Do design ao deploy.",
  },
  {
    icon: Settings2,
    title: "Sistemas Personalizados",
    description: "Sistemas sob medida para a sua operação — dashboards, ERPs internos, integrações e APIs robustas.",
  },
  {
    icon: Workflow,
    title: "Automação de Processos",
    description: "Automações que economizam tempo: integrações entre ferramentas, scripts e fluxos inteligentes.",
  },
];

export const Services = () => {
  return (
    <section id="servicos" className="relative py-24 md:py-32">
      <div className="container">
        <div className="reveal text-center max-w-2xl mx-auto mb-16">
          <p className="font-mono text-xs text-brand-purple tracking-[0.3em] uppercase mb-4">
            // services
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4 text-balance">
            O que eu posso <span className="gradient-text">fazer por você</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Soluções end-to-end com qualidade de código profissional.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="reveal group relative rounded-3xl glass gradient-border p-8 hover:-translate-y-1 transition-all duration-300"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-brand-soft border border-white/10 group-hover:shadow-glow-mix transition-shadow">
                <s.icon size={26} className="text-brand-orange group-hover:text-foreground transition-colors" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.description}</p>

              <div className="mt-6 inline-flex items-center text-sm font-medium gradient-text opacity-0 group-hover:opacity-100 transition-opacity">
                Vamos conversar →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
