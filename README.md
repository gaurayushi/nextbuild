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
## 📸 UI Preview

| Home Page | Products |
|-----------|----------|
| ![profile01](https://github.com/user-attachments/assets/376105b7-3d76-483d-b240-169b8bcea0f5) | ![profile02](https://github.com/user-attachments/assets/1582f497-3320-42db-8b15-0e95bb999cae) |

| Product Detail | Cart |
|----------------|------|
| ![profile03](https://github.com/user-attachments/assets/7aa07373-4791-41f2-a2b0-ce7211d2fd03) | ![profile04](https://github.com/user-attachments/assets/05a1a03b-e1b2-4bcb-b3e4-3daf69002244) |

| Checkout |
|----------|
| ![profile05](https://github.com/user-attachments/assets/c660167e-edc8-4d85-a66a-70cfa864774f) |

> 💡 All images are from the production deployment on [rabbitcom.vercel.app](https://rabbitcom.vercel.app)



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


## 📸 UI Preview

| Sign Up & Login | Dashboard & Bookmarks |
|-----------------|------------------------|
| ![profile02](https://github.com/user-attachments/assets/ad4f1337-fcc7-4c43-9c85-1c656abc5824) | ![profile05](https://github.com/user-attachments/assets/be0357d3-04d9-422b-8507-084ff8164325) |
| ![profile06](https://github.com/user-attachments/assets/e5038828-ec17-4b55-b608-55e7643be855) | ![Captureprofrl](https://github.com/user-attachments/assets/4d1812e1-5f23-49df-a084-6ab8694a0d17) |
| ![profile01](https://github.com/user-attachments/assets/0810f171-755f-48e9-9ebf-de85dadcc6e1) | ![cpatur93](https://github.com/user-attachments/assets/23c15f4c-4c90-4f5a-9b02-3e370d4241fe) |
| ![Capture](https://github.com/user-attachments/assets/18063912-d7d1-4013-b4e2-a2a9e77a80f6) | ![ss](https://github.com/user-attachments/assets/471784ff-683c-4362-9e5b-52649cafc5cc) |


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
