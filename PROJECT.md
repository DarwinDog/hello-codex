# Hello World-webprosjekt

## Formål

Bygge og publisere en minimal Hello World-nettside. Prosjektet er en praktisk læringsarena for profesjonell, AI-assistert programvareutvikling, fra tomt repository til en enkel publisert webapplikasjon.

## Målgruppe

Primær målgruppe er prosjektets eier: en erfaren IT-prosjektleder som er ny som programmerer. Løsningen og dokumentasjonen skal derfor prioritere tydelighet, små steg og forklarbare tekniske valg.

## Avgrensning

- Én enkel statisk nettside som viser en Hello World-hilsen.
- Ingen frontend-rammeverk, backend, database, innlogging eller eksterne API-er.
- Ingen funksjoner utover det som er nødvendig for å lære den grunnleggende utviklings-, test-, bygge- og publiseringsflyten.

## Teknologistakk

- Vanilla TypeScript for klientkode, uten React eller andre frontend-rammeverk.
- Vite for lokal utviklingsserver og produksjonsbygg.
- Vitest for automatiserte tester.
- Bun som package manager og runtime.
- Git og GitHub for versjonskontroll og publisering av kildekode.

## Foreslått mappestruktur

```text
.
├── AGENTS.md             # Arbeidsregler for Codex
├── PROJECT.md            # Prosjektets mål og rammer
├── index.html            # Inngangsside
├── package.json          # Skript og avhengigheter
├── src/                  # TypeScript-kildekode
│   ├── main.ts           # Starter applikasjonen
│   └── style.css         # Enkel styling
├── tests/                # Vitest-tester
├── public/               # Statiske filer som kopieres uendret
└── dist/                 # Generert produksjonsbygg, ikke versjonert
```

Mappestrukturen er et mål for neste faser; bare styringsdokumentene er opprettet foreløpig.

## Kvalitetskrav

- Nettsiden skal være enkel, forståelig og fungere i moderne nettlesere.
- Kildekoden skal være liten, lesbar og skrevet i TypeScript.
- Endringer skal være avgrensede og forklares før nye avhengigheter tas i bruk.
- Tester og produksjonsbygg skal lykkes etter kodeendringer.
- Ingen secrets, passord, tokens eller lokale miljøfiler skal versjoneres.

## Teststrategi

- Skriv små enhetstester for logikk som kan testes uten nettleser.
- Kjør relevante Vitest-tester etter kodeendringer.
- Kjør Vite-produksjonsbuild for å verifisere at prosjektet kan bygges.
- Utfør en enkel manuell kontroll i nettleser av at siden viser forventet innhold.

## Milepæler

1. Etablere prosjektets arbeidsregler og mål i `AGENTS.md` og `PROJECT.md`.
2. Initialisere Vite-prosjekt med TypeScript ved hjelp av Bun.
3. Lage minimal Hello World-side i vanilla TypeScript.
4. Legge til og kjøre Vitest-tester for relevant applikasjonslogikk.
5. Verifisere lokal utviklingsserver og produksjonsbuild.
6. Klargjøre repository for GitHub uten å inkludere lokale eller sensitive filer.
7. Publisere den bygde Hello World-siden med en valgt hostingløsning.
