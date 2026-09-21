# Hello World-webprosjekt

En minimal statisk nettside som viser en Hello World-hilsen.

Prosjektet er en praktisk læringsarena for AI-assistert programvareutvikling – fra et tomt repository til en enkel publisert webapplikasjon. Det er laget for en erfaren IT-prosjektleder som er ny som programmerer.

## Teknologi

- TypeScript uten frontend-rammeverk
- Vite for lokal utvikling og produksjonsbygg
- Vitest for automatiserte tester
- Bun som package manager og runtime
- Git og GitHub for versjonskontroll og publisering av kildekode

## Avgrensning

Prosjektet skal holdes enkelt: én statisk nettside, uten backend, database, innlogging eller eksterne API-er.

## Komme i gang

Hello World-siden er implementert med en automatisert test og kommandoer for lokal utvikling og bygging.

Du må ha Bun installert. Kjør kommandoene i prosjektmappen:

| Kommando | Hva den gjør |
| --- | --- |
| `bun install` | Installerer prosjektets avhengigheter. Kjør denne først. |
| `bun run dev` | Starter utviklingsserveren. Åpne adressen som vises i terminalen. |
| `bun run test` | Kjører testene én gang. |
| `bun run test:watch` | Kjører testene på nytt når du endrer filer. |
| `bun run build` | Kontrollerer TypeScript og lager produksjonsbygget i `dist/`. |
| `bun run preview` | Starter lokal forhåndsvisning av produksjonsbygget. Krever at `bun run build` er kjørt først. |

Stopp utviklingsserveren, testovervåkingen eller forhåndsvisningen med `Ctrl+C`.

## Publisering

Nettsiden er publisert på [https://darwindog.github.io/hello-codex/](https://darwindog.github.io/hello-codex/).

GitHub Actions tester automatisk prosjektet, bygger nettsiden og publiserer den til GitHub Pages når endringer pushes til `main`.

## Viktige filer og mapper

- `index.html`: inngangssiden som laster applikasjonen.
- `src/main.ts`: bygger innholdet på siden.
- `src/greeting.ts`: definerer Hello World-hilsenen.
- `src/style.css`: bestemmer sidens utseende.
- `tests/`: automatiserte tester, foreløpig for hilsenen.
- `package.json`: kommandoer og avhengigheter.
- `bun.lock`: låser avhengighetene til bestemte versjoner.
- `tsconfig.json`: innstillinger for TypeScript.
- `dist/`: genererte filer fra produksjonsbygget, ikke lagret i Git.
- `PROJECT.md` og `AGENTS.md`: prosjektets rammer og arbeidsregler.

## Arbeidsform

- Gjør små og fokuserte endringer.
- Kjør relevante tester og produksjonsbygg etter kodeendringer.
- Ikke legg hemmeligheter eller lokale miljøfiler i Git.
- Ikke opprett commits eller publiser til GitHub uten uttrykkelig godkjenning.

Se [PROJECT.md](PROJECT.md) for mål og tekniske rammer, og [AGENTS.md](AGENTS.md) for arbeidsregler.
