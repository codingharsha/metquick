# Authentication Architecture Plan

## Background
We are integrating a JWT-based authentication system into the MetQuick frontend, connecting to a Spring Boot backend. 

## Proposed Architecture
1. **State Management:** Use `AuthContext` to manage `user` object and `token` state across the application.
2. **Persistence:** JWT tokens will be stored in `localStorage` for now. We will implement an Axios-style interceptor in `lib/api.js` to attach the token to outgoing requests.
3. **Flow:**
   - **Login:** Unified page for Customer/Mentor. Backend response will contain the JWT and role. `AuthContext` will handle redirection.
   - **Admin:** Separate route `/admin/login`.
   - **Guards:** Create a `ProtectedRoute` component to wrap sensitive pages (e.g., `/dashboard`, `/sessions`).
4. **Roles:** User object in `AuthContext` will include `role` (CUSTOMER, MENTOR, ADMIN) to facilitate role-based UI.

## File Changes
- **Create/Modify**:
  - `frontend/context/AuthContext.js`: Define provider and hooks.
  - `frontend/lib/auth.js`: Helper functions for auth logic (storage, validation).
  - `frontend/lib/api.js`: Base API client with interceptors.
  - `frontend/app/login/page.js`: New Login UI.
  - `frontend/app/register/page.js`: New Registration UI.
  - `frontend/components/auth/LoginForm.js`: UI logic.
  - `frontend/components/auth/RegisterForm.js`: UI logic.

## Verification
- Login with valid credentials → Token stored → Redirect based on role.
- Access protected route without token → Redirect to login.
- Logout → Token cleared → Redirect to home.
