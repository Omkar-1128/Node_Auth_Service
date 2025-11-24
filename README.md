# Authentication System

A full-stack authentication application built with React and Node.js, featuring secure user registration, login, and JWT-based session management.

## Features

- **User Registration** - New users can create accounts with email, username, and password
- **User Login** - Existing users can authenticate with email and password
- **Secure Password Storage** - Passwords are hashed using bcrypt before storage
- **JWT Authentication** - Token-based authentication with HTTP-only cookies
- **Protected Routes** - Middleware verification for authenticated users
- **MongoDB Integration** - User data persisted in MongoDB database

## Tech Stack

### Frontend
- React 19
- React Router DOM - Client-side routing
- Axios - HTTP requests
- React Toastify - User notifications
- Vite - Build tool and dev server

### Backend
- Node.js with Express 5
- MongoDB with Mongoose
- JWT (jsonwebtoken) - Token generation and verification
- bcryptjs - Password hashing
- cookie-parser - Cookie handling
- CORS - Cross-origin resource sharing
- dotenv - Environment variable management

## Project Structure

```
.
├── backend/
│   ├── Controller/
│   │   └── AuthController.js      # Signup and Login logic
│   ├── Middleware/
│   │   └── AuthMiddleware.js      # JWT verification middleware
│   ├── Models/
│   │   └── UserModel.js           # User schema and model
│   ├── Routes/
│   │   └── AuthRoute.js           # API routes
│   ├── util/
│   │   └── SecreteToken.js        # JWT token creation
│   ├── .env                       # Environment variables
│   ├── index.js                   # Server entry point
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── Pages/                 # Login, Signup, Home pages
    │   ├── App.jsx                # Main app component
    │   └── main.jsx               # React entry point
    ├── index.html
    └── package.json
```

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the backend directory:
```env
PORT=3001
DB_URL=your_mongodb_connection_string
TOKEN_KEY=your_secret_jwt_key
```

4. Start the backend server:
```bash
npm start
```

The backend will run on `http://localhost:3001`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:5173`

## API Endpoints

### POST `/signup`
Register a new user

**Request Body:**
```json
{
  "email": "user@example.com",
  "username": "username",
  "password": "password123"
}
```

**Response:**
```json
{
  "message": "User signed in successfully",
  "success": true,
  "user": { ... }
}
```

### POST `/login`
Authenticate an existing user

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "message": "User logged in successfully",
  "success": true
}
```

### POST `/`
Verify user authentication status

**Response:**
```json
{
  "status": true,
  "user": "username"
}
```

## How It Works

1. **Registration Flow:**
   - User submits email, username, and password
   - Backend checks if email already exists
   - Password is hashed using bcrypt (12 salt rounds)
   - User document is created in MongoDB
   - JWT token is generated and sent as HTTP cookie
   - User is redirected to home page

2. **Login Flow:**
   - User submits email and password
   - Backend validates credentials exist
   - Password is compared with hashed password in database
   - If valid, JWT token is generated and sent as cookie
   - User gains access to protected routes

3. **Authentication Verification:**
   - JWT token is stored in HTTP cookie
   - Middleware verifies token on protected routes
   - Token expires after 3 days
   - Invalid/expired tokens deny access

## Security Features

- Passwords hashed with bcrypt (12 rounds)
- JWT tokens with 3-day expiration
- HTTP-only cookies (configurable)
- CORS configuration for specific origins
- Input validation on login/signup
- Unique email constraint in database

## Environment Variables

| Variable | Description |
|----------|-------------|
| `PORT` | Backend server port (default: 3001) |
| `DB_URL` | MongoDB connection string |
| `TOKEN_KEY` | Secret key for JWT signing |

## Development

### Backend
```bash
cd backend
npm start  # Uses nodemon for auto-reload
```

### Frontend
```bash
cd frontend
npm run dev  # Vite dev server with HMR
```

## Build for Production

### Frontend
```bash
cd frontend
npm run build
```

The production build will be in the `frontend/dist` directory.

## Author

Omkar Shelke

## License

ISC
