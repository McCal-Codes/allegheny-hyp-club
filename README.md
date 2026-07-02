# The Allegheny HYP Club

Marketing website for [The Allegheny HYP Club](https://www.alleghenyhypclub.com) — Pittsburgh's private club for young professionals.

Built with React, Vite, TypeScript, Tailwind CSS, and React Router.

## Local development

```bash
npm install
npm run dev
```

The dev server starts at `http://localhost:5173`.

## Contact form

The inquiry form posts to [Formspree](https://formspree.io). To enable it locally:

1. Copy `.env.example` to `.env`
2. Set `VITE_FORMSPREE_ID` to your Formspree form ID

Without that variable, the form displays but submissions are disabled.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Type-check and build for production |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview the production build |

## Images

Page photos live in `public/images/`. The Open Graph image is `public/og-image.jpg`.

## Repository

https://github.com/McCal-Codes/allegheny-hyp-club
