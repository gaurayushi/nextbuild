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

# ⚡ Abun – Dashboard UI with DnD, Charts, and Radix UI

Abun is a modern, elegant, and interactive dashboard app built with **React 19**, **Tailwind CSS**, **Radix UI**, and powerful drag-and-drop (DnD) capabilities via `@dnd-kit`. It includes components for charts, themes, modals, tooltips, and more.

> 🔗 **Live Demo:** [https://nextbuild-abun.vercel.app/](https://nextbuild-abun.vercel.app/)

---

## 🚀 Tech Stack

### 🧩 Frontend

- **React 19**
- **Tailwind CSS**
- **@dnd-kit** – Drag-and-drop interactivity
- **Radix UI** – Accessible headless UI components
- **Lucide React** – Icon library
- **Zod** – Schema validation
- **Recharts** – Chart components
- **Sonner** – Toast notifications
- **Vaul** – Drawer & sheet component
- **Next Themes** – Light/dark theme toggle
- **Class Variance Authority / Tailwind Variants / tailwind-merge** – Utility class helpers

### 🧪 Dev Tooling

- **Vite** – Lightning-fast bundler
- **ESLint** – Linting with React hooks & refresh plugins
- **PostCSS + Autoprefixer**
- **TypeScript (via @types)**

---

## 📸 UI Preview

| Dashboard View | Drag & Drop |
|----------------|-------------|
| ![work](https://github.com/user-attachments/assets/2b5526c6-4a59-4e9f-9f10-220c75fa03cb) | ![wrk01](https://github.com/user-attachments/assets/8e2d618d-47aa-4a0b-82bc-ef7b944c2151) |

---

## 🛠️ Getting Started

### 📦 Install dependencies

```bash
npm install
```

or

```bash
pnpm install
```

### 🧪 Run the app

```bash
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173)

---

## 🧩 Scripts

| Script      | Description                    |
|-------------|--------------------------------|
| `dev`       | Start Vite dev server          |
| `build`     | Build for production           |
| `preview`   | Preview the built site locally |
| `lint`      | Run ESLint checks              |

---

## 📂 Project Structure

```
abun/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── styles/
│   └── main.tsx
├── tailwind.config.js
├── postcss.config.js
└── vite.config.ts
```

---

## ✨ Features

- Drag-and-drop with reorderable panels
- Responsive, animated UI with smooth transitions
- Charts powered by `Recharts`
- Dark/light theme support
- Headless UI via `Radix`
- Clean, accessible, mobile-friendly design

---

## 📄 License

MIT License – feel free to use and modify!

---

> Made with 💙 by [Ayushi Gaur](https://github.com/gaurayushi)
