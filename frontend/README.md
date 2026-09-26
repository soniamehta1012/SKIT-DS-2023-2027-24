# Wildlife Vision — Frontend

A React (Vite) frontend for an AI-based animal identification platform, styled to match
the provided reference design (dark forest-green theme).

## Pages

- **Login** (`/login`) — log in / sign up tabs, mock auth (localStorage only)
- **Home** (`/`) — hero, image upload UI, sample detection result, "how it works" steps
- **About** (`/about`) — full About Us content
- **History** (`/history`) — list of past detections (requires being "logged in"; protected route)
- **Results** (`/results/:id`) — detailed view of a single detection

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## About the data layer

Everything here is **frontend only**:

- `src/context/AuthContext.jsx` fakes login/signup with `localStorage`. No requests
  are sent anywhere.
- `src/data/mockData.js` holds the sample detections shown on Home, History and Results.

## Wiring up your MongoDB backend later

1. Build your API (e.g. Node/Express + Mongoose) with endpoints such as:
   - `POST /api/auth/login`, `POST /api/auth/signup`
   - `POST /api/detect` (accepts an image, returns a prediction)
   - `GET /api/detections` (a user's history), `GET /api/detections/:id`
2. In `AuthContext.jsx`, replace the mock bodies of `login()` and `signup()` with
   `fetch()` calls to your auth endpoints, and store the returned token instead of
   the fake user object.
3. In `Home.jsx`, replace the sample result with the response from `POST /api/detect`
   once the user picks a file.
4. In `History.jsx` and `Results.jsx`, replace `mockData.js` with data fetched from
   `GET /api/detections` and `GET /api/detections/:id`.

No component structure needs to change for this — only the data source.
