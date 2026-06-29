# Deploying Trinovtech to Hostinger

This site has two parts:

| Part | What it is | Where it goes |
|------|------------|---------------|
| **Frontend** | React (Vite) static site — the whole website | Hostinger `public_html` |
| **Backend** | Express + MongoDB API — **only** the Contact form uses it | A Node host (see options) |

The frontend is plain static files and works on **any** Hostinger plan. The
backend needs a place that can run Node.js + reach MongoDB.

---

## 0. First, check which Hostinger plan you have

Log into **hPanel** → look at the top plan name, or:

- **Hosting → Manage** shows a **File Manager** with a `public_html` folder
  → you're on **Shared / Web hosting**. (Static site = easy. Cannot run Node here —
  use the external backend option below.)
- You see a **VPS** entry with SSH details → you have a **VPS** (can run everything).
- Under **Advanced** (or **Website → ...**) there is a **Node.js** app tool
  → **Cloud/Business** plan (can run the backend in hPanel).

If unsure, assume **Shared hosting** and use **Frontend on Hostinger + Backend on Render** below.

---

## 1. Deploy the FRONTEND (all plans)

### Build it
```bash
# from the project root
cp .env.production.example .env.production
# edit .env.production and set VITE_API_URL to your backend URL (see step 2)
npm install
npm run build
```
This produces a `dist/` folder containing `index.html`, `assets/`, images, and
the `.htaccess` (already configured for SPA routing + caching).

### Upload it
1. hPanel → **File Manager** → open **`public_html`**.
2. Delete any default `index.html` / placeholder already there.
3. Upload **everything _inside_ `dist/`** (not the `dist` folder itself) into
   `public_html`. Easiest: zip the contents of `dist/`, upload the zip, then
   **Extract** in File Manager.
4. Make sure **`.htaccess`** landed in `public_html` (enable "show hidden files"
   in File Manager if you don't see it). This file is what makes
   `/services/web-app`, `/solutions/...`, `/technologies/...` work on refresh.
5. hPanel → **SSL** → install the free SSL, and turn on **Force HTTPS**.

Visit your domain — the site should load and deep links should work.

> Re-deploying later = rebuild (`npm run build`) and re-upload `dist/` contents.

---

## 2. Deploy the BACKEND (Contact form)

Pick the option that matches your plan.

### Option A — Shared hosting → host the API free on Render + MongoDB Atlas
Shared hosting can't run Node persistently, so put the API on Render (free) and
the database on MongoDB Atlas (free).

1. **MongoDB Atlas**: create a free cluster at https://www.mongodb.com/atlas →
   Database Access (create a user) → Network Access (allow `0.0.0.0/0`) →
   copy the connection string (looks like
   `mongodb+srv://USER:PASS@cluster0.xxxx.mongodb.net/trinovtech`).
2. Push this repo to GitHub.
3. **Render** (https://render.com) → New → **Web Service** → connect the repo:
   - **Root Directory:** `server`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Environment variables:**
     - `MONGO_URI` = your Atlas string
     - `CLIENT_ORIGIN` = `https://your-domain.com,https://www.your-domain.com`
     - (Render sets `PORT` automatically — the server already reads it.)
4. Render gives you a URL like `https://trinovtech-api.onrender.com`.
   Test it: open `https://trinovtech-api.onrender.com/api/health` → `{"ok":true,...}`.
5. Set `VITE_API_URL=https://trinovtech-api.onrender.com/api` in `.env.production`,
   then **rebuild and re-upload the frontend** (step 1).

### Option B — VPS (run everything yourself)
SSH into the VPS, then:
```bash
# install Node 18+ and PM2
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm i -g pm2

# get the code (git clone or upload), then:
cd server
npm install
# create server/.env  (see variables below)
pm2 start server.js --name trinovtech-api
pm2 save && pm2 startup
```
Use MongoDB Atlas (Option A step 1) for `MONGO_URI`, or install MongoDB on the VPS.
Put Nginx in front to expose it as `https://api.your-domain.com` and add SSL
(Certbot). Then set `VITE_API_URL=https://api.your-domain.com/api` and rebuild the
frontend. You can also serve the frontend from the same VPS via Nginx instead of
Hostinger shared hosting.

### Option C — Cloud/Business hPanel Node.js app
hPanel → **Node.js** → Create application:
- **Application root:** upload the `server/` folder there
- **Startup file:** `server.js`
- **Environment variables:** `MONGO_URI`, `CLIENT_ORIGIN` (your domain), `PORT` (use the one hPanel assigns)
- Run `npm install` from the app's UI, then start it.
- Note the app URL/path it exposes and set `VITE_API_URL` to `<that-url>/api`, then rebuild the frontend.

---

## 3. Backend environment variables (reference)

Create `server/.env` (or set these in Render/hPanel):
```
PORT=5050
MONGO_URI=mongodb+srv://USER:PASS@cluster0.xxxx.mongodb.net/trinovtech
CLIENT_ORIGIN=https://your-domain.com,https://www.your-domain.com
```
`CLIENT_ORIGIN` accepts a comma-separated list so both `www` and non-`www` work.

---

## 4. Checklist

- [ ] `.env.production` has the real `VITE_API_URL` (ends in `/api`)
- [ ] `npm run build` run **after** setting that
- [ ] Contents of `dist/` (incl. `.htaccess`) uploaded to `public_html`
- [ ] SSL installed + Force HTTPS on
- [ ] Backend deployed; `/api/health` returns `{"ok":true}`
- [ ] `CLIENT_ORIGIN` on the backend = your live domain(s)
- [ ] Submitted the contact form on the live site successfully
