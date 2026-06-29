# Trinovtech API (Express + MongoDB)

The **M-E-N** of the MERN stack — a REST API for the React frontend.

## Endpoints

| Method | Route | Purpose |
|--------|-------|---------|
| GET | `/api/health` | Health check |
| POST | `/api/contact` | Save a contact message |
| GET | `/api/contact` | List messages (admin) |
| GET | `/api/blogs` | List blogs (`?category=`) |
| GET | `/api/blogs/:slug` | Single blog |

## Setup

```bash
cd server
cp .env.example .env        # adjust MONGO_URI if needed
npm install
```

You need MongoDB running locally. Install it with:

```bash
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community   # starts mongod on :27017
```

(or use a free MongoDB Atlas cluster and put its URI in `.env`).

## Run

```bash
npm run dev     # auto-restart on changes (node --watch)
npm start       # production
npm run seed    # load the sample blog posts into MongoDB
npm test        # end-to-end API test (uses an in-memory MongoDB, no install needed)
```

## Structure

```
server/
├── config/db.js        # Mongoose connection
├── models/             # Contact, Application, Blog schemas
├── routes/             # contact, applications, blogs
├── seed.js             # seed blogs from src/data/blogs.js
├── test/api.test.mjs   # in-memory end-to-end test
└── server.js           # Express app entry
```
