# PDFLite

Upload a PDF and get a structured summary written by a language model that runs locally through [Ollama](https://ollama.com). PDFLite is a Next.js web app with sign-in, a per-user summary history, and Stripe-based plans.

This is a learning project about wiring a local model into a web product. It has not been benchmarked yet (see [Limitations](#limitations)).

## How it works

```
Sign in (Clerk)
  -> Upload PDF (Uploadthing, PDF only, up to 32 MB)
  -> Server action fetches the file and extracts its text (LangChain PDFLoader / pdf-parse)
  -> Text is sent in one request to Ollama (/api/generate, model phi3:mini)
  -> Summary is saved to Postgres (Neon)
  -> Dashboard: open a summary, download it as a text file, or delete it
```

- **Model call:** `lib/ollama.ts` posts to `http://localhost:11434/api/generate` with `phi3:mini`, temperature 0.7, and a 1,500-token output cap.
- **Prompt:** one fixed prompt template in `utils/prompts.ts` produces an emoji-styled markdown summary.
- **Plans:** non-Pro users can store 5 summaries and Pro users 1,000 (`lib/user.ts`). Stripe webhooks (`app/api/payments/route.ts`) handle completed checkouts and cancelled subscriptions.

## Tech stack

Next.js 15 (App Router, server actions), React 19, TypeScript, Tailwind CSS 4, Radix UI, Clerk (auth), Uploadthing (file upload), Neon serverless Postgres, LangChain community PDF loader, Ollama, Stripe.

## Run it locally

You need Node.js 18.18 or later, [Ollama](https://ollama.com/download), and free accounts for Neon, Clerk, and Uploadthing. Stripe (test mode) is only needed for the payment flow.

```bash
git clone https://github.com/Hubiram/PDFLite.git
cd PDFLite
npm install
cp .env.example .env.local      # then fill in the values
ollama pull phi3:mini           # Ollama must be running on localhost:11434
npm run dev                     # http://localhost:3000
```

Create the database tables by running `schema.sql` in the Neon SQL editor.

To test payments locally, forward Stripe events to the webhook route:

```bash
stripe listen --forward-to localhost:3000/api/payments
```

### Environment variables

| Variable | Used for |
| --- | --- |
| `DATABASE_URL` | Neon Postgres connection string |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`, `CLERK_SECRET_KEY` | Clerk authentication |
| `UPLOADTHING_TOKEN` | Uploadthing file uploads |
| `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET` | Stripe webhook handling |

The Stripe price IDs and payment links in `utils/constants.ts` are test-mode values for the original author's Stripe account. Replace them with your own.

## Project layout

```
app/          routes: landing page, dashboard, upload, summary pages, API routes
actions/      server actions: extract text, generate summary, save and delete summaries
components/   UI components (home, upload, summaries, shared)
lib/          Ollama client, PDF text extraction, database, plan and payment logic
utils/        prompt template, constants, formatting helpers
schema.sql    Postgres tables: users, pdf_summaries, payments
```

## Limitations

- **No chunking.** The full extracted text goes to the model in a single prompt. Long documents can exceed the model's context window.
- **Not benchmarked.** There are no measurements yet of latency, tokens per second, or memory use, and summary quality has not been evaluated.
- **Local model only, hardcoded.** The model name and the Ollama URL are fixed in `lib/ollama.ts`. Ollama must run on the same machine as the Next.js server, so a serverless host such as Vercel cannot reach it.
- **Text PDFs only.** There is no OCR, so scanned or image-only PDFs produce little or no text.
- **Fixed output style.** Every summary follows the same template from `utils/prompts.ts`.
- **No automated tests.**

## Planned work

A benchmark of summarization latency, tokens per second, and peak memory for CPU versus GPU inference. Results will be added to this README when they are public.

## Author

Abhiram Gullapalli ([@Hubiram](https://github.com/Hubiram))