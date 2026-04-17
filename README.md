# Notes Management REST API

A fully functional RESTful API for managing notes, built with Node.js, Express, and MongoDB (Mongoose). This project implements clean MVC architecture, follows strict REST conventions, and provides all 8 basic and bulk CRUD operations.

## Features
- **Create**: Add single or multiple notes at once.
- **Read**: Fetch all notes or a specific note by ID.
- **Update**: Replace an entire note (PUT) or update specific fields (PATCH).
- **Delete**: Remove a single note or delete multiple notes by ID.

## Standard Validation & Consistency
- Unified standardized JSON response format.
- Graceful error handling (400, 404, 500 status codes).
- Mongoose strict schema enforcement for required fields.

## Project Setup

### Prerequisites
- Node.js installed
- MongoDB connection string (e.g., from MongoDB Atlas)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/hanumanraj07/notes-management-api.git
   cd notes-management-api
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   - Copy `.env.example` to a new file named `.env`.
   - Update `MONGO_URI` in `.env` with your actual MongoDB connection string.
   - Update `PORT` if needed (default is 5000).

### Running the App
- **Development Mode** (auto-restarts on changes):
  ```bash
  npm run dev
  ```
- **Production Mode**:
  ```bash
  npm start
  ```

## API Documentation
Base URL: `http://localhost:5000/api/notes` (when running locally)

| Method | Endpoint             | Description |
|--------|----------------------|-------------|
| POST   | `/api/notes`         | Create a single note |
| POST   | `/api/notes/bulk`    | Create multiple notes at once |
| GET    | `/api/notes`         | Get all notes |
| GET    | `/api/notes/:id`     | Get a single note by ID |
| PUT    | `/api/notes/:id`     | Replace a note completely |
| PATCH  | `/api/notes/:id`     | Update specific fields only |
| DELETE | `/api/notes/:id`     | Delete a single note |
| DELETE | `/api/notes/bulk`    | Delete multiple notes by IDs |

## Tech Stack
- **Node.js**
- **Express.js**
- **MongoDB + Mongoose**
- **Dotenv**
