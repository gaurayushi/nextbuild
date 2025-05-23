# 🐇 RabbitCom - Modern React E-commerce Frontend

RabbitCom is a sleek and performant modern **React E-commerce frontend** built with **React 19**, **Tailwind CSS**, **Framer Motion**, and **PayPal Integration**.

> 🔗 Live Preview: [https://rabbitcom.vercel.app](https://rabbitcom.vercel.app)

---

## 🚀 Tech Stack

### 🎨 Frontend
- **React 19** – Modern React with performance improvements
- **React Router v7** – SPA routing
- **Tailwind CSS** – Utility-first styling
- **Framer Motion** – Smooth animations
- **React Icons** – Prebuilt icon library
- **Lucide React** – Clean and customizable SVG icons
- **Sonner** – Minimal and beautiful toast notifications
- **@paypal/react-paypal-js** – Secure PayPal payment integration
- ** Use context ** for state management 

### 🧪 Dev Tools
- **Vite** – Fast build tool
- **ESLint** – Linting for clean and consistent code
- **PostCSS + Autoprefixer** – Automatic vendor prefixing

---


# 📚 SniplyBook

A full-stack MERN application for bookmarking and organizing content. Built with React, Node.js, Express, and MongoDB.

## 🌐 Live Demo (Coming Soon)
Deployment in progress for both frontend and backend.

---

## 🚀 Features

- 🔐 User Authentication (Sign up & Log in)
- 🔖 Bookmark content with ease
- 📁 Store user data securely in MongoDB
- 💡 Frontend and backend fully separated for scalability

---

## 🧰 Tech Stack

| Layer       | Tech                        |
|------------|-----------------------------|
| Frontend    | React, TailwindCSS, Axios    |
| Backend     | Node.js, Express, Mongoose   |
| Database    | MongoDB Atlas                |
| Auth        | JWT, bcryptjs                |

---

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18+)
- MongoDB Atlas account
- [pnpm](https://pnpm.io/) or npm/yarn (optional)

---

## 📁 Folder Structure

```
SniplyBook/
├── backend/          # Express backend (API & MongoDB connection)
│   ├── config/       # DB connection setup
│   ├── controllers/  # Route handler logic (auth, bookmarks)
│   ├── models/       # Mongoose schemas
│   ├── routes/       # API route definitions
│   ├── .env          # Backend environment variables
│   └── server.js     # Entry point
│
├── frontend/         # React frontend (Vite-based)
│   ├── src/
│   │   ├── api/      # Axios config
│   │   ├── pages/    # Login, Signup, Dashboard, etc.
│   │   ├── utils/    # Auth helpers, Toastify, etc.
│   │   └── App.jsx   # Main app entry
│   ├── public/
│   ├── .env          # Frontend environment variables
│   └── vite.config.js


## 📦 Project Setup

```bash
# 1. Clone the repo
git clone https://github.com/gaurayushi/RabbitCom.git
cd RabbitCom

# 2. Install dependencies
npm install

# 3. Run the development server
npm run dev
