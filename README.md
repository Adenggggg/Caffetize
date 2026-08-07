# Caffetize

React Router v7 (framework mode) + TypeScript + Tailwind CSS v4 + shadcn/ui-style components.
Currently **UI only** — static/mock data, no Supabase, auth, or cart logic wired up yet.

## Setup

```bash
npm install
npm run dev
```

## Structure

```
app/
  routes.ts              # route registry
  root.tsx                # HTML shell, fonts, header/footer wrapper
  app.css                 # Tailwind v4 theme + shadcn tokens (Caffetize palette)
  components/
    site-header.tsx
    site-footer.tsx
    ui/                    # button, card, input, badge (shadcn-style primitives)
  routes/
    home.tsx               # hero, featured brews, craft section, barista pick
    menu.tsx                # category sidebar, filters, product grid
    menu.$slug.tsx          # product customization page
    checkout.tsx            # order summary + pickup + payment
    404.tsx                 # catch-all not-found page
```

## Notes

- Colors, type scale, and component variants are defined once in `app/app.css`
  (`--color-cream`, `--color-clay`, `--color-olive`, etc.) and consumed via
  Tailwind's `@theme` + shadcn's semantic tokens (`--primary`, `--muted`, ...).
- `ui/*` components are hand-written using the standard shadcn/ui patterns
  (cva + Radix Slot), so if you later run the real `shadcn` CLI it's a
  drop-in replacement, not a rewrite.
- Images currently point to Unsplash placeholders — swap for real product
  photography whenever it's ready.
- Next step once the UI is approved: Drizzle schema, Supabase client, RR7
  loaders/actions, Zustand cart store, Supabase Auth (Google), and the
  payment stub interface.
