const technologies = [
  { name: "React", slug: "react" },
  { name: "Next.js", slug: "nextjs" },
  { name: "NestJS", slug: "nestjs" },
  { name: "TypeScript", slug: "ts" },
  { name: "Node.js", slug: "nodejs" },
  { name: "Python", slug: "python" },
  { name: "PostgreSQL", slug: "postgresql" },
  { name: "SQL Server", slug: "mssql", customIcon: "/sqlserver.svg" },
  { name: "Docker", slug: "docker" },
  { name: "TailwindCSS", slug: "tailwind" },
  { name: "HTML", slug: "html" },
  { name: "CSS", slug: "css" },
  { name: "JavaScript", slug: "js" },
];

const tools = [
  { name: "Supabase", slug: "supabase" },
  { name: "Prisma", slug: "prisma" },
  { name: "Express", slug: "express" },
  { name: "Vite", slug: "vite" },
  { name: "GitHub", slug: "github" },
  { name: "Git", slug: "git" },
  { name: "VS Code", slug: "vscode" },
  { name: "Cursor", slug: "cursor", customIcon: "https://raw.githubusercontent.com/getcursor/cursor/main/assets/icon.png" },
  { name: "DBeaver", slug: "dbeaver", customIcon: "https://cdn.simpleicons.org/dbeaver" },
  { name: "InnoSetup", slug: "innosetup", customIcon: "https://raw.githubusercontent.com/jrsoftware/issrc/main/Graphics/InnoSetup.png" },
  { name: "Power BI", slug: "powerbi", customIcon: "https://cdn.simpleicons.org/powerbi" },
  { name: "Figma", slug: "figma" },
  { name: "Antigravity", slug: "antigravity", customIcon: "/antigravity-color.svg" },
];

export const Tech = () => {
  return (
    <section id="tecnologias" className="relative py-16 md:py-32">
      <div className="container">
        {/* Technologies Section */}
        <div className="reveal text-center max-w-2xl mx-auto mb-12">
          <p className="font-mono text-xs text-brand-purple tracking-[0.3em] uppercase mb-4">
            // stack
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4 text-balance">
            Tecnologias que eu <span className="gradient-text">domino</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Fundamentos e frameworks para construir produtos de alta performance.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-5 mb-16">
          {technologies.map((t, i) => (
            <TechCard key={t.name} tech={t} index={i} />
          ))}
        </div>

        {/* Tools Section */}
        <div className="reveal text-center max-w-2xl mx-auto mb-12">
          <p className="font-mono text-xs text-brand-purple tracking-[0.3em] uppercase mb-4">
            // ferramentas
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4 text-balance">
            Ferramentas & <span className="gradient-text">Ecossistema</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            O que eu uso no dia a dia para acelerar o desenvolvimento.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-5">
          {tools.map((t, i) => (
            <TechCard key={t.name} tech={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TechCard = ({ tech, index }: { tech: any; index: number }) => (
  <div
    className="reveal group relative rounded-2xl glass gradient-border p-6 text-center hover:-translate-y-1 transition-transform duration-300"
    style={{ transitionDelay: `${index * 30}ms` }}
  >
    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-brand-soft border border-white/10 group-hover:shadow-glow-mix transition-shadow">
      <img 
        src={tech.customIcon || `https://skillicons.dev/icons?i=${tech.slug}`} 
        alt={tech.name}
        className="h-8 w-8 object-contain group-hover:scale-110 transition-transform duration-300"
      />
    </div>
    <div className="font-display font-semibold text-foreground text-sm">{tech.name}</div>
  </div>
);
