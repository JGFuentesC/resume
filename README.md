# josegustavofuentes.com.mx

Personal portfolio site for Dr. Jose Gustavo Fuentes — AI Executive, Entrepreneur, and Professor.

## Stack

- Vanilla HTML / CSS / JS — no frameworks, no build step
- Modular CSS (tokens → reset → typography → grid → components → sections → animations)
- Three-language i18n (ES / EN / 日本語) via `js/i18n.js`
- AI-generated B&W conceptual photography (diffusion models)
- Deployed on **Cloud Run** (nginx:alpine) with a custom domain

## Run locally

```bash
open index.html
# or
python3 -m http.server 8080
```

## Project structure

```
├── index.html
├── css/
│   ├── tokens.css        # design tokens (colors, spacing, typography)
│   ├── reset.css
│   ├── typography.css
│   ├── grid.css
│   ├── components.css    # nav, cards, timeline, badges…
│   ├── sections.css      # per-section layout
│   ├── animations.css    # scroll reveal, stagger, fade-in
│   ├── noise.css         # photo overlays & grain
│   └── utilities.css
├── js/
│   ├── i18n.js           # ES / EN / JA language switcher
│   ├── scroll.js         # reveal on scroll + progress bar
│   ├── cursor.js         # custom cursor (desktop)
│   └── email.js          # obfuscated email
└── assets/
    ├── photos/
    │   ├── genai/        # AI-generated B&W portraits
    │   ├── hobbies/      # hobby section images
    │   └── face/         # reference photo (not used in production)
    └── docs/
        └── credentials/  # PDF/PNG certificates linked from the site
```

## i18n

Language preference is persisted in `localStorage`. Every translatable element carries a `data-i18n="key"` attribute; the full translation dictionary lives in `js/i18n.js`.

## License

[Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)](LICENSE)
© 2026 Jose Gustavo Fuentes.
