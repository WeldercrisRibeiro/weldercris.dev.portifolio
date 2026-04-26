# Weldercris.dev — Portfólio

Site de portfólio single-page em React + Vite + Tailwind, tema dark com identidade visual em **laranja**.

---

## 🎨 Paleta de cores e como alterar

Todas as cores do site são controladas por **variáveis CSS** definidas em **`src/index.css`** (bloco `:root`). Componentes nunca usam cores fixas — eles consomem tokens semânticos do Tailwind (`bg-primary`, `text-foreground`, `bg-gradient-brand`, etc.), que por sua vez leem essas variáveis. Por isso, **basta editar `src/index.css`** para mudar a identidade do site inteiro.

### Estado atual: paleta monocromática laranja

O degradê roxo foi removido. O "gradiente da marca" agora vai de laranja vibrante para laranja-âmbar mais escuro, mantendo profundidade visual sem introduzir uma segunda cor.

```css
/* src/index.css */
--brand-orange: 25 100% 50%;   /* #FF6A00 — laranja principal */
--brand-purple: 18 100% 45%;   /* tom laranja-âmbar (antes era roxo) */
```

> O nome `--brand-purple` foi mantido por compatibilidade com todo o código existente. Apesar do nome, hoje ele guarda um **tom de laranja**.

### Como voltar a usar o roxo (ou qualquer outra cor secundária)

Basta trocar o valor HSL de `--brand-purple` em `src/index.css`:

```css
--brand-purple: 264 100% 59%;  /* roxo neon original #7B2EFF */
```

Isso reativa automaticamente o degradê laranja → roxo em:
- Logo (`src/components/Logo.tsx`)
- Títulos com `.gradient-text`
- Bordas `.gradient-border`
- Botões e CTAs com `bg-gradient-brand`
- Glow do cursor customizado
- Scrollbar
- Animação `glow-pulse`

### Como trocar o laranja principal

Edite `--brand-orange` (e os tokens semânticos que apontam para o mesmo HSL):

```css
--brand-orange: 25 100% 50%;   /* mude aqui */
--primary:      25 100% 50%;   /* manter igual ao brand-orange */
--ring:         25 100% 50%;   /* idem */
--accent:       25 100% 50%;   /* idem */
```

### Tokens relacionados

| Variável                | Função                                     |
| ----------------------- | ------------------------------------------ |
| `--background`          | Cor de fundo da página (`#0D0D0D`)         |
| `--foreground`          | Cor do texto principal                     |
| `--primary`             | CTA principal (laranja)                    |
| `--secondary` / `--accent` | Secundário (hoje também laranja)        |
| `--brand-orange`        | Início do degradê da marca                 |
| `--brand-purple`        | Fim do degradê da marca (hoje laranja)     |
| `--gradient-brand`      | `linear-gradient(135deg, orange, purple)`  |
| `--shadow-glow-orange`  | Glow laranja                               |
| `--shadow-glow-purple`  | Glow do tom secundário                     |

> ⚠️ Use sempre **HSL sem `hsl(...)`** dentro das variáveis (ex.: `25 100% 50%`). O `hsl()` é aplicado pelo Tailwind/CSS quando a variável é consumida.

---

## 🚀 Stack

- React 18 + Vite + TypeScript
- Tailwind CSS v3 (tokens semânticos)
- shadcn/ui + lucide-react
- Fontes: Space Grotesk, Inter, JetBrains Mono

## 📁 Estrutura

```
src/
├── components/
│   ├── Logo.tsx              # Logo SVG (usa --brand-orange / --brand-purple)
│   ├── CustomCursor.tsx      # Cursor com glow
│   └── sections/             # Hero, About, Tech, Projects, Services, Contact, Footer, Navbar
├── pages/Index.tsx           # Página única que monta todas as seções
└── index.css                 # 👈 Design system (cores, gradientes, animações)
```
