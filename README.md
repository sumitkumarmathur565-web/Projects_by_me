# MERN Chat App

A full-stack chat application built using the MERN stack that allows users to authenticate, view other registered users, and interact through a chat interface.

## Features

- **User Authentication** — User registration and login.
- **JWT Authentication** — Token-based authentication using cookies.
- **Protected Routes** — Middleware verifies user authentication before granting access.
- **User List** — Fetch and display registered users.
- **Chat Interface** — A chat window with a message display area and message input.
- **REST API** — Backend API built with Node.js and Express.
- **Database Integration** — MongoDB with Mongoose for data management.
- **Responsive UI** — Frontend built with React and Tailwind CSS.

## Tech Stack

**Frontend**
- React
- Tailwind CSS
- JavaScript

**Backend**
- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Tokens (JWT)
- bcrypt / bcryptjs
- cookie-parser

## Project Structure

```text
chat-app/
├── backend/
│   └── src/
│       ├── models/
│       ├── routes/
│       ├── controllers/
│       ├── middleware/
│       └── ...
├── frontend/
│   └── src/
│       ├── components/
│       ├── pages/
│       └── ...
├── .gitignore
└── README.md
```

## Getting Started

### Prerequisites

- Node.js and npm
- MongoDB running locally or a MongoDB Atlas database
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/sumitkumarmathur565-web/mern-chat-app.git
cd mern-chat-app
```



### 2. Set Up the Backend

```bash
cd backend
npm install
```

Create a `.env` file in the backend directory and configure the environment variables required by your application.

Example:

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secure_secret
```

Use the exact variable names expected by your backend code. Never commit your actual `.env` file or secrets.

Start the backend using the appropriate script from `backend/package.json`, for example:

```bash
npm run dev
```

### 3. Set Up the Frontend

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Open the local URL displayed by Vite in your terminal.

## API Overview

The backend provides authentication and user-related endpoints.

| Functionality | Description |
|---|---|
| Register | Create a user account |
| Login | Authenticate a user |
| Logout | End the authenticated session |
| Get Users | Retrieve users for the chat interface |

## Security

- Passwords are hashed before storage.
- JWT verification protects authenticated routes.
- Environment variables are used for sensitive configuration.
- Protected endpoints validate authentication before processing requests.

## Future Improvements

- Real-time messaging using Socket.IO.
- Message persistence and chat history.
- Online/offline user status.
- Typing indicators and read receipts.
- Image and file sharing.
- Automated backend tests.
- Deployment with a live demo.

## Author

**Sumit Mathur**

- GitHub: https://github.com/sumitkumarmathur565-web

## License

This project is available for learning and portfolio purposes. Add a license if you intend to grant others specific rights to use, modify, or distribute the code.