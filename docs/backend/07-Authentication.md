# 07. Authentication

**Project:** CineNest

**Version:** 1.0

**Status:** Planning Phase

---

# 1. Purpose

This document defines the authentication architecture for CineNest.

Authentication is responsible for identifying users, securing access to protected features, managing sessions, and providing a safe and seamless login experience.

CineNest uses **Appwrite Authentication** as the identity provider.

---

# 2. Authentication Goals

The authentication system should:

* Allow users to register securely.
* Allow users to log in using email and password.
* Verify email addresses.
* Maintain secure sessions.
* Support logout from the current device.
* Support multiple active sessions across devices.
* Recover forgotten passwords.
* Protect authenticated routes.
* Integrate cleanly with the React frontend.

---

# 3. Authentication Provider

Authentication is handled entirely by Appwrite.

Responsibilities handled by Appwrite:

* User registration
* Email/password login
* Session management
* Email verification
* Password recovery
* Secure password storage
* User identity management

CineNest will not store passwords in its own database.

---

# 4. User Types

The system supports the following user roles.

## Guest

Guests can:

* Browse movies
* Browse TV shows
* Search content
* View movie details
* Watch available streams

Guests cannot:

* Save watchlists
* Add favorites
* Write reviews
* Comment
* Access profile settings
* Access the admin panel

---

## Registered User

Registered users have all guest permissions plus:

* Manage profile
* Save watchlist
* Save favorites
* Track watch history
* Continue watching
* Rate movies
* Write reviews
* Post comments
* Report broken links
* Request movies

---

## Administrator

Administrators have all user permissions plus:

* Manage users
* View analytics
* Review reports
* Moderate reviews
* Moderate comments
* Manage homepage content
* Send notifications
* Access the admin dashboard

---

# 5. Registration Flow

```text
User

↓

Registration Form

↓

Client Validation

↓

Appwrite Account Creation

↓

Verification Email Sent

↓

User Clicks Verification Link

↓

Email Verified

↓

User Profile Created

↓

Dashboard/Homepage
```

---

# 6. Login Flow

```text
User

↓

Login Form

↓

Client Validation

↓

Appwrite Authentication

↓

Session Created

↓

User Context Updated

↓

Protected Features Enabled
```

---

# 7. Logout Flow

```text
User

↓

Logout Button

↓

Delete Current Session

↓

Clear User Context

↓

Redirect to Home
```

---

# 8. Password Recovery Flow

```text
Forgot Password

↓

Enter Email

↓

Appwrite Sends Reset Link

↓

User Opens Link

↓

Choose New Password

↓

Password Updated

↓

Login
```

---

# 9. Session Management

Appwrite manages authenticated sessions.

The frontend should:

* Check for an active session on application startup.
* Restore the authenticated user automatically.
* Redirect unauthenticated users away from protected pages.
* Remove local authentication state after logout.

---

# 10. Authentication State

The React application should maintain a global authentication state.

Example:

```text
Guest

↓

Loading

↓

Authenticated
```

The UI should react automatically to authentication changes.

---

# 11. Protected Features

Authentication is required for:

* Watchlist
* Favorites
* Watch History
* Continue Watching
* Reviews
* Comments
* Notifications
* Movie Requests
* Broken Link Reports
* Profile Settings
* Admin Dashboard

---

# 12. Public Features

Authentication is NOT required for:

* Home
* Movies
* TV Shows
* Search
* Watch Page
* Trailers
* Cast Information

This ensures that new users can explore the platform before creating an account.

---

# 13. Route Protection

Protected routes should verify authentication before rendering.

Examples:

Protected:

```text
/profile
/watchlist
/settings
/admin
```

Public:

```text
/
/movies
/tvshows
/search
/watch/:type/:id
```

If an unauthenticated user attempts to access a protected route, they should be redirected to the login page.

---

# 14. Email Verification

New accounts must verify their email address.

Benefits:

* Prevent fake accounts.
* Improve account recovery.
* Enable trusted communication.
* Reduce spam.

Users who have not verified their email may browse the platform but cannot use authenticated features until verification is complete.

---

# 15. Password Policy

Minimum requirements:

* At least 8 characters.
* One uppercase letter.
* One lowercase letter.
* One number.

Recommended:

* One special character.

Passwords are never stored by CineNest.

---

# 16. Security Considerations

Authentication should:

* Never expose passwords.
* Use HTTPS in production.
* Validate all user input.
* Prevent unauthorized access.
* Rely on Appwrite session management.
* Avoid storing sensitive authentication data in local storage.

---

# 17. Error Handling

Common authentication errors:

* Invalid email
* Incorrect password
* Email already exists
* Email not verified
* Session expired
* Password reset token expired

Errors should be translated into user-friendly messages.

---

# 18. Future Authentication Features

Potential future enhancements:

* Google Sign-In
* GitHub Sign-In
* Magic Link Login
* Multi-Factor Authentication (MFA)
* Device Management
* Login History
* Suspicious Login Detection

---

# 19. Engineering Decisions

### ADR-019

Appwrite is the single source of truth for authentication.

Reason:

Avoid maintaining a custom authentication system.

---

### ADR-020

Guests can browse the platform without logging in.

Reason:

Lower the barrier to entry and improve user experience.

---

### ADR-021

Authentication state is managed globally.

Reason:

Many components depend on the current user.

---

### ADR-022

Protected routes enforce authentication before rendering.

Reason:

Prevent unauthorized access to user-specific features.

---

# 20. Revision History

| Version | Date           | Description                                  |
| ------- | -------------- | -------------------------------------------- |
| 1.0     | Planning Phase | Initial authentication architecture created. |
