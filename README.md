# 🚀 React Admin Dashboard (v2.0 - Theme & Context Evolution)

This is a modern, modular **Admin Dashboard** built with React. It serves as a showcase of my frontend engineering skills, focusing on clean code architecture, global state management, and scalable project structure.

---

## 📸 Screenshots

<div class="flex justify-center gap-4">
  <img src="public/dashboard.png" class="w-1/2 h-64 object-cover rounded" alt="Dashboard" />
  <img src="public/login.png" class="w-1/2 h-64 object-cover rounded" alt="Login" />
</div>

### 🌙 Dark Mode
<div class="flex justify-center gap-4">
  <img src="public/dashboard-dark.png" class="w-1/2 h-64 object-cover rounded" alt="Dashboard Dark Mode" />
</div>

---

## ✨ Key Features & Implementation

### 🌗 Theme Management & Automation
* **Global Context API:** Integrated `ThemeContext` to manage application-wide state (Light/Dark mode) effectively, eliminating prop drilling.
* **Tailwind CSS v4 Integration:** Utilized the latest `@variant dark` logic combined with a root-level class toggle for high-performance theme switching.
* **State Persistence:** User's theme preference is automatically synchronized with `localStorage` for a consistent experience across sessions.

### 🛡️ Secure Authentication & Identity (AuthContext)
* **Protected Routes:** Implemented a `ProtectedRoute` wrapper to manage session-based access control, ensuring only authorized admins can access the dashboard.
* **Environment-Driven Identity:** Admin credentials and sensitive branding data are securely fetched from `.env` variables using Vite's `import.meta.env` logic.
* **Session Management:** Transitioned to `sessionStorage` for authentication states to ensure data is automatically wiped when the browser tab is closed, enhancing security.
* **Global Identity Rendering:** The admin's identity is globally managed via `AuthContext` and dynamically displayed across the **Navbar**, **Sidebar**, and **Footer**.

### 👥 User Management & Global State (UsersContext)
* **Real-time User Synchronization:** Developed a `UsersContext` to bridge the gap between the **Registration** flow and the **Admin Dashboard**.
* **Instant Dashboard Updates:** New users are automatically added to the global state and become immediately visible on the **Users Page** for administrative review.
* **Data Persistence:** Supports full user lifecycle management with `localStorage` persistence and administrative actions like real-time user deletion.

### 🏗️ Architecture & Developer Experience (DX)
* **Advanced Path Aliasing:** Configured custom directory aliases in `vite.config.js` to simplify imports and maintain a clean codebase (e.g., `@views/*`, `@context/*`, `@assets/*`).
* **Component-Based UI:** Modularized the layout into `Sidebar`, `Navbar`, and `Footer` using React Router's `<Outlet />` for maximum reusability and scalable page structures.
* **Dynamic Configuration:** Sidebar, Navbar, and Footer elements are rendered dynamically from reusable configuration objects, making the UI easy to extend and maintain.

---

## ⚠️ Project Scope & Usage Note

This project is a **Frontend Portfolio Showcase** designed to demonstrate administrative dashboard architecture, CRUD operations, and global state management. Please note the following regarding its functional scope:

* **Administrative Focus:** The core logic is strictly built for the **Admin Panel**. While a Registration page exists, it is implemented solely to demonstrate data flow (reading user inputs and dynamically rendering them in the **Users Management** table). 
* **Access Control:** Registered users cannot "log in" to a separate user portal. Access to the dashboard is restricted to the **Admin Identity** defined in the system environment.
* **Authentication:** To explore the dashboard features, you must use the Admin credentials on the **Login Page**.
* **Purpose:** This is not a production-ready commercial application; it is a specialized technical demonstration created for recruitment and portfolio presentation purposes.

---

## 🛠️ Technologies Used

- **Core:** React 18 (Hooks, Context API)
- **Styling:** Tailwind CSS (v4 features utilized)
- **Routing:** React Router DOM v6
- **Build Tool:** Vite
- **Icons:** React Icons (Fa, Md, Io)

---

## 🔑 Demo Access

To test the dashboard functionality, use the following credentials on the login page:

- **Username:** `admin`
- **Password:** `admin_123`

---

## ⚙️ Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/N-Emil/Admin-Dashboard.git