# Trinovtech Creations — One-Page MERN Website

A responsive, animated **single-page** website for Trinovtech Creations, themed to the brand logo (navy + green) and built on the **MERN** stack.

## Tech Stack

- **MongoDB** — database (via Mongoose) for Contact messages & Career applications
- **Express + Node.js** — REST API (`/server`)
- **React 18** — frontend (`/src`), a single-page scrolling site
- **Vite** — build tool & dev server
- Plain **CSS** with design tokens (light navy/green theme)

## Single-page layout

Everything lives on one scrolling page. The navbar links smooth-scroll to sections,
with an active-section highlight (scrollspy):

`Hero → Services → Tech stack → Solutions → Why us → About → Contact`

The Contact form POSTs to the Express API and persists to MongoDB.

## Getting Started

**Frontend:**

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into /dist
npm run preview  # preview the production build
```

**Backend** (second terminal — needs MongoDB running):

```bash
cd server
cp .env.example .env
npm install
npm test         # verify the API end-to-end (in-memory MongoDB, no install needed)
npm run dev      # http://localhost:5050
```

Start MongoDB locally with `brew services start mongodb-community` (default port 27017).

> Note: the backend runs on **port 5050** (macOS reserves 5000 for AirPlay).

## Project Structure

```
src/
├── components/   # Navbar, Footer, Logo, cards, animation helpers
├── sections/     # Hero, Services, Tech, Solutions, Why, About, Career, Contact, CTA
├── pages/
│   └── OnePage.jsx   # assembles all sections
├── data/         # services, solutions content
├── lib/api.js    # fetch helper → Express API
├── App.jsx       # layout (ScrollProgress + Navbar + OnePage + Footer)
└── index.css     # global styles, theme & animations

server/
├── config/db.js          # Mongoose connection
├── models/               # Contact, Application
├── routes/               # contact, applications
├── test/api.test.mjs     # in-memory end-to-end test
└── server.js             # Express app entry
```

## API

| Method | Route | Purpose |
|--------|-------|---------|
| GET | `/api/health` | Health check |
| POST | `/api/contact` | Save a contact message |
| GET | `/api/contact` | List messages |

## Branding

The real logo is at `public/logo.png` (used in the navbar and, on a white badge, in the footer).
