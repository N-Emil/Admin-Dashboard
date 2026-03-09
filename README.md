# 🚀 React Admin Dashboard (Technical Showcase)

This is a modern, modular **Admin Dashboard** built with React. It serves as a showcase of my frontend engineering skills, focusing on clean code architecture, secure routing, and scalable project structure. 

This project is a **work-in-progress** and part of my professional development syllabus. I will be continuously adding new features such as Context API, API integration, and advanced state management as I progress.

---

## 📸 Screenshots

<div class="flex justify-center gap-4">
  <img src="public/dashboard.png" class="w-1/2 h-64 object-cover rounded" alt="Dashboard" />
  <img src="public/login.png" class="w-1/2 h-64 object-cover rounded" alt="Login" />
</div>

---

## ✨ Features & Implementation

### 🛡️ Secure Authentication & Routing
- **Protected Routes:** Implemented a `ProtectedRoute` wrapper to manage session-based access.
- **Authentication Logic:** Uses `localStorage` to persist login states and `React Router DOM` for seamless navigation.
- **Environment Safety:** Sensitive credentials (like Admin login) are managed via `.env` variables using Vite's `import.meta.env`.

### 🏗️ Architecture & Developer Experience (DX)
- **Path Aliasing:** Configured custom aliases in `vite.config.js` to avoid "prop drilling" and messy imports:
  - `@/*` points to `src/`
  - `@views/*` points to `src/views/`
- **Modular Layout:** Separated the UI into `Sidebar`, `Navbar`, and `Main Content` (using `<Outlet />`) for maximum reusability.
- **Dynamic UI:** Sidebar and Navbar elements are rendered dynamically from configuration objects (arrays).

### 🎨 Design & UI
- **Tailwind CSS:** Utilized for a utility-first, fully responsive design.
- **React Icons:** Integrated for a consistent and professional visual experience.

---

## 🛠️ Technologies Used

- **Core:** React 18
- **Build Tool:** Vite (Optimized for speed)
- **Routing:** React Router DOM v6
- **Styling:** Tailwind CSS
- **Icons:** React Icons
- **Environment Management:** Dotenv (.env)

---

## 🔑 Demo Access

To test the dashboard functionality, use the following credentials on the login page:

- **Username:** `admin`
- **Password:** `admin_123`

> *Note: These are demo credentials provided for recruitment and testing purposes.*

---

## ⚙️ Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/N-Emil/Admin-Dashboard.git