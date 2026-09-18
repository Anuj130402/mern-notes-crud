# Student Notes — MERN CRUD App

**Name:** Anuj Kandwal
**Student ID:** 2026201048
**GitHub Repo:** https://github.com/Anuj130402/mern-notes-crud

A full-stack notes app: React + Vite frontend, Express + MongoDB backend.

## Setup

Prerequisites: Node.js, MongoDB running locally on port 27017.

### 1. Start MongoDB

```
mongod --dbpath ~/mongodb-data
```

### 2. Backend (port 8000)

```
cd server
npm install
npm start
```

### 3. Frontend (port 5173)

```
cd client
npm install
npm run dev
```

Open http://localhost:5173

## Note on Port

Backend runs on port **8000** (macOS reserves port 5000 for AirPlay). The PDF permits 8000.

## API Endpoints

- `POST /api/notes` — create a note
- `GET /api/notes` — list all notes (newest first)
- `DELETE /api/notes/:id` — delete a note