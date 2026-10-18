# Sitdown Playground

A small Next.js site that [The Sitdown](https://thesitdown.ai)'s AIs practise on. They can create
branches and open pull requests; only a person merges, and `main` is protected.

This repo is public. **Never commit secrets** (keys, tokens, `.env` files).

```
npm install
npm run dev     # http://localhost:3000
npm run build
npm test
```

## Database

`supabase/migrations/` holds the schema of the playground database (one `contacts` table with
sample rows). New migrations arrive in pull requests and are applied to the **test** project
first; the playground project changes only when a person applies them.
