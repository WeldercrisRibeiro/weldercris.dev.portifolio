# Weldercris.dev — Portfólio Premium

Site de página única, dark, futurista, com identidade forte em preto, laranja vibrante e roxo neon. Foco em sensação premium, animações elegantes e responsividade total.

## Identidade visual

- **Logo W/`</>`**: símbolo SVG customizado feito de dois "V" geométricos invertidos formando um W, com colchetes sutis (`<` e `>`) integrados nas pontas externas. Traços finos, contorno em gradiente laranja→roxo, fundo preto. Aparece no header, no hero e como favicon.
- **Paleta** (tokens HSL no `index.css`):
  - Fundo `#0D0D0D`
  - Laranja CTA `#FF6A00`
  - Roxo neon `#7B2EFF`
  - Texto `#FFFFFF` + cinza suave para secundário
  - Gradiente principal: laranja → roxo (usado em títulos, botões, bordas e glow)
- **Tipografia**: Space Grotesk (títulos, peso forte) + Inter (corpo) via Google Fonts. JetBrains Mono em pequenos detalhes "code".
- **Glassmorphism leve**: cards com `backdrop-blur`, borda 1px gradiente, sombra interna sutil.

## Estrutura do site (single page com âncoras)

**1. Navbar fixa** (top)
- Logo W à esquerda + "Weldercris.dev"
- Links: Sobre · Tecnologias · Projetos · Serviços · Contato
- Glassmorphism, fica mais sólida ao rolar
- Menu mobile (hambúrguer → drawer)

**2. Hero**
- Logo grande centralizado com glow pulsante
- Título "Weldercris.dev" enorme com gradiente laranja→roxo
- Subtítulo: *Desenvolvendo soluções modernas para web e negócios*
- Dois CTAs: **Ver Projetos** (laranja sólido) e **Entrar em Contato** (outline com hover glow roxo)
- Background: grid sutil + dois "blobs" desfocados laranja/roxo flutuando
- Animação de entrada (fade + slide)

**3. Sobre Mim**
- Layout 2 colunas (desktop) / empilhado (mobile)
- Texto profissional sobre foco em sistemas modernos, sites profissionais, automações e soluções digitais
- Card lateral com mini "stats" (anos, projetos, stacks) — placeholders editáveis

**4. Tecnologias**
- Grid de cards (4 col desktop, 2 mobile) com ícone + nome:
  HTML, CSS, JavaScript, TypeScript, React, C#, SQL Server, Git/GitHub
- Hover: card levanta levemente, borda ganha gradiente, ícone faz glow

**5. Projetos** (estilo repositório GitHub)
- Header com pequeno badge "// repositories"
- Grid de cards (placeholders vazios prontos para preencher) com:
  - Ícone de repo + nome do projeto
  - Descrição curta
  - Chips de tecnologias
  - Botão **Visualizar** (link)
  - Linha de "stats" estilo GitHub (★ / fork) decorativa
- 6 cards placeholder iniciais

**6. Serviços**
- 3 cards grandes lado a lado:
  - Desenvolvimento Web
  - Sistemas Personalizados
  - Automação de Processos
- Cada um com ícone, título, descrição curta, hover glow

**7. Contato**
- Bloco final com frase de impacto
- Botões/ícones grandes: **Email**, **GitHub**, **LinkedIn**, **WhatsApp** (placeholders de URL editáveis)
- Sem formulário

**8. Footer**
- Logo pequeno + "© 2026 Weldercris.dev — Construído com café e código"
- Links rápidos

## Efeitos e animações

- **Cursor customizado**: dot central + ring que segue o mouse com leve atraso; ring expande e ganha glow laranja/roxo ao passar sobre links/botões/cards. Desativado em touch devices.
- **Hover glow**: bordas e sombras com gradiente animado em todos elementos interativos.
- **Scroll reveal**: seções fazem fade + translate-up ao entrar no viewport (Intersection Observer, sem libs pesadas).
- **Smooth scroll** nas âncoras da navbar.
- **Blobs animados** no hero (CSS keyframes).
- Transições suaves em tudo (200–400ms, easing customizado).

## Responsividade

- Mobile-first; breakpoints sm/md/lg/xl do Tailwind
- Tipografia escalonada (`clamp` ou classes responsivas)
- Grids colapsam para 1 coluna no mobile
- Navbar vira drawer
- Cursor custom desligado em mobile

## Detalhes técnicos

- Tudo em `src/pages/Index.tsx` consumindo componentes em `src/components/sections/` (Navbar, Hero, About, Tech, Projects, Services, Contact, Footer) + `src/components/Logo.tsx` e `src/components/CustomCursor.tsx`.
- Design system em `src/index.css` (tokens HSL: `--bg`, `--accent-orange`, `--accent-purple`, `--text`, gradientes) e `tailwind.config.ts` (cores semânticas, `backgroundImage` gradientes, `boxShadow` glow, fontes, keyframes `float`, `glow-pulse`, `fade-up`).
- Fontes via `<link>` no `index.html` (Google Fonts).
- Favicon SVG do logo substituindo o atual.
- Meta tags (title, description, OG) atualizadas para "Weldercris.dev".
- Sem dependências novas; ícones via `lucide-react` (já instalado).
