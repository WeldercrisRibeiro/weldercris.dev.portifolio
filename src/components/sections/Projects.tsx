import { ExternalLink, GitFork, Star, FolderGit2 } from "lucide-react";

interface Project {
  name: string;
  description: string;
  techs: string[];
  url?: string;
  stars?: number;
  forks?: number;
}

// Placeholders — edite livremente
const projects: Project[] = [
  { name: "project-name", description: "Descrição curta do projeto. Substitua por um caso real.", techs: ["React", "TypeScript"], stars: 0, forks: 0 },
  { name: "project-name", description: "Descrição curta do projeto. Substitua por um caso real.", techs: ["C#", "SQL Server"], stars: 0, forks: 0 },
  { name: "project-name", description: "Descrição curta do projeto. Substitua por um caso real.", techs: ["Node.js", "React"], stars: 0, forks: 0 },
];

export const Projects = () => {
  return (
    <section id="projetos" className="relative py-24 md:py-32">
      <div className="container">
        <div className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="font-mono text-xs text-brand-purple tracking-[0.3em] uppercase mb-4">
              // repositories
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-balance">
              Projetos <span className="gradient-text">em destaque</span>
            </h2>
          </div>
          <a
            href="https://github.com/WeldercrisRibeiro"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors self-start md:self-auto"
          >
            Ver tudo no GitHub
            <ExternalLink size={14} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <article
              key={i}
              className="reveal group relative flex flex-col rounded-2xl glass gradient-border p-6 hover:-translate-y-1 transition-all duration-300"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <FolderGit2 size={16} className="text-brand-orange" />
                  <span className="font-mono text-xs">public</span>
                </div>
                <a
                  href={p.url ?? "#"}
                  className="opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-foreground"
                  aria-label="Visualizar projeto"
                >
                  <ExternalLink size={16} />
                </a>
              </div>

              <h3 className="font-display text-xl font-semibold mb-2 group-hover:gradient-text transition-colors">
                {p.name}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                {p.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {p.techs.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-mono text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div className="flex items-center gap-4 text-xs text-muted-foreground font-mono">
                  <span className="inline-flex items-center gap-1">
                    <Star size={12} /> {p.stars ?? 0}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <GitFork size={12} /> {p.forks ?? 0}
                  </span>
                </div>
                <a
                  href={p.url ?? "#"}
                  className="inline-flex items-center gap-1.5 rounded-full bg-gradient-brand px-3.5 py-1.5 text-xs font-semibold text-white shadow-glow-orange/0 hover:shadow-glow-mix transition-shadow"
                >
                  Visualizar
                  <ExternalLink size={12} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
