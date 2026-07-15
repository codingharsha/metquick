---
name: jwt-auth-architecture
description: Design of JWT-based authentication system for MetQuick
metadata:
  type: project
---

**Design:**
- **AuthContext**: A React Context wrapper (`AuthContext.js`) providing authentication state (user, isAuthenticated, role) and methods (login, register, logout).
- **JWT Storage**: Secure storage via `localStorage` (or `sessionStorage` if preferred for security; `localStorage` is standard for simple web apps without SSR-specific cookie needs, though `httpOnly` cookies via backend is better for long-term production. Given "future backend integration", I will prepare for a modular approach).
- **Protected Routes**: Middleware or wrapper component (`withAuth`) to guard routes (e.g., `/dashboard`, `/messages`) based on user state.
- **Backend Sync**: API utility (`api.js`) to handle Authorization headers.

**Why:**
Separating auth state from components ensures reusability and scalability as the platform grows.

**How to apply:**
1. Populate `AuthContext.js` with `AuthProvider`.
2. Implement `login` and `register` handlers in `api.js`.
3. Wrap `AppShell` or individual pages with `AuthProvider`.
