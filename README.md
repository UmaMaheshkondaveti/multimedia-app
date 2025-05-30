# Multimedia Upload & Search Web App 🎥📁🔍

A full-stack application that allows users to upload multimedia files and search through them using a keyword-based system. Includes authentication, file hosting via Cloudinary, and persistent metadata in MongoDB.

---

## 🚀 Features

- 🖼 Upload multimedia files (images/videos) with metadata
- 🔍 Search uploaded files by tags or names
- 🔐 JWT-based user authentication (Register/Login)
- 🗂 Role-based navbar + logout functionality
- ☁️ Cloudinary integration for media storage
- 📦 MongoDB Atlas for data persistence
- ⚛️ React + Redux for state management

---

## 🧰 Tech Stack

### Frontend
- React (Vite)
- React Router
- Redux Toolkit
- Axios
- Cloudinary Upload via FormData

### Backend
- Node.js + Express
- MongoDB Atlas
- Cloudinary SDK
- JWT for Authentication
- Multer for file parsing (if using local uploads)

---

## 📁 Folder Structure

client/
├── src/
│ ├── api/
│ │ └── axios.js
│ ├── components/
│ │ └── Navbar.jsx
│ ├── pages/
│ │ ├── Login.jsx
│ │ ├── Register.jsx
│ │ ├── Upload.jsx
│ │ └── Search.jsx
│ ├── redux/
│ │ ├── authSlice.js
│ │ └── store.js
│ ├── App.jsx
│ └── main.jsx
├── index.css
└── vite.config.js

server/
├── controllers/
│ ├── authController.js
│ └── fileController.js
├── routes/
│ ├── authRoutes.js
│ └── fileRoutes.js
├── models/
│ ├── User.js
│ └── File.js
├── utils/
│ └── cloudinary.js
├── middleware/
│ ├── authMiddleware.js
│ └── multer.js
├── .env
└── server.js



---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/multimedia-app.git
cd multimedia-app


```
# For frontend
cd client
npm install

# For backend
cd ../server
npm install

```

# Start backend
cd server
npm run dev

# Start frontend (in new terminal)
cd client
npm run dev
