const techs = [
  { name: "HTML", icon: "</>" },
  { name: "CSS", icon: "#" },
  { name: "JavaScript", icon: "JS" },
  { name: "TypeScript", icon: "TS" },
  { name: "React", icon: "⚛" },
  { name: "C#", icon: "C#" },
  { name: "SQL Server", icon: "DB" },
  { name: "Git / GitHub", icon: "⎇" },
];

export const Tech = () => {
  return (
    <section id="tecnologias" className="relative py-24 md:py-32">
      <div className="container">
        <div className="reveal text-center max-w-2xl mx-auto mb-16">
          <p className="font-mono text-xs text-brand-purple tracking-[0.3em] uppercase mb-4">
            // stack
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4 text-balance">
            Tecnologias que eu <span className="gradient-text">domino</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Ferramentas modernas para construir produtos rápidos, robustos e escaláveis.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-5">
          {techs.map((t, i) => (
            <div
              key={t.name}
              className="reveal group relative rounded-2xl glass gradient-border p-6 text-center hover:-translate-y-1 transition-transform duration-300"
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-brand-soft border border-white/10 font-mono text-lg font-bold text-foreground group-hover:shadow-glow-mix transition-shadow">
                {t.icon}
              </div>
              <div className="font-display font-semibold text-foreground">{t.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
