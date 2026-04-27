import { Mail, Github, Linkedin, MessageCircle, ArrowUpRight } from "lucide-react";

const contacts = [
  { icon: Mail, label: "Email", value: "weldercris.ribeiro.dev@gmail.com", href: "mailto:weldercris.ribeiro.dev@gmail.com" },
  { icon: Github, label: "GitHub", value: "@weldercris", href: "https://github.com/WeldercrisRibeiro" },
  { icon: Linkedin, label: "LinkedIn", value: "/in/weldercris", href: "https://www.linkedin.com/in/weldercris-ribeiro/" },
  { icon: MessageCircle, label: "WhatsApp", value: "Conversar agora", href: "https://wa.me/5585991970045" },
];

export const Contact = () => {
  return (
    <section id="contato" className="relative py-24 md:py-32">
      <div className="container">
        <div className="relative rounded-3xl overflow-hidden">
          <div aria-hidden className="absolute inset-0 bg-gradient-brand opacity-20" />
          <div aria-hidden className="absolute inset-0 grid-bg opacity-50" />
          <div aria-hidden className="absolute -top-32 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-brand-orange/40 blur-3xl" />
          <div aria-hidden className="absolute -bottom-32 right-10 h-72 w-72 rounded-full bg-brand-purple/40 blur-3xl" />

          <div className="relative glass-strong rounded-3xl p-8 md:p-16">
            <div className="reveal text-center max-w-3xl mx-auto mb-14">
              <p className="font-mono text-xs text-brand-orange tracking-[0.3em] uppercase mb-4">
                // contato
              </p>
              <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-balance">
                Vamos construir algo{" "}
                <span className="gradient-text">extraordinário</span>?
              </h2>
              <p className="mt-5 text-lg text-muted-foreground">
                Estou disponível para novos projetos e parcerias. Escolha o canal que preferir.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {contacts.map((c, i) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="reveal group flex items-center gap-4 rounded-2xl glass gradient-border p-5 hover:-translate-y-0.5 transition-transform"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-brand-soft border border-white/10 group-hover:shadow-glow-mix transition-shadow">
                    <c.icon size={20} className="text-brand-orange" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">
                      {c.label}
                    </div>
                    <div className="font-medium truncate">{c.value}</div>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-muted-foreground group-hover:text-foreground group-hover:rotate-12 transition-all"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
