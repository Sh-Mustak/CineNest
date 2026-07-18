# 08. Authorization

**Project:** CineNest

**Version:** 1.0

**Status:** Planning Phase

---

# 1. Purpose

This document defines the authorization model of CineNest.

Authorization determines what actions users are allowed to perform after they have been authenticated.

It also defines permissions for guests, registered users, moderators (future), and administrators.

---

# 2. Authorization Goals

The authorization system should:

* Protect private user data.
* Prevent unauthorized access.
* Restrict administrative functions.
* Enforce ownership of user-generated content.
* Keep permissions simple and maintainable.
* Integrate with Appwrite's permission model.

---

# 3. User Roles

The application defines the following roles.

| Role                 | Description               |
| -------------------- | ------------------------- |
| Guest                | Not logged in             |
| User                 | Authenticated user        |
| Admin                | Application administrator |
| Moderator *(Future)* | Content moderation        |

---

# 4. Permission Matrix

| Feature            | Guest | User | Admin |
| ------------------ | :---: | :--: | :---: |
| Browse Movies      |   ✅   |   ✅  |   ✅   |
| Browse TV Shows    |   ✅   |   ✅  |   ✅   |
| Search             |   ✅   |   ✅  |   ✅   |
| Watch Content      |   ✅   |   ✅  |   ✅   |
| Register           |   ✅   |   ❌  |   ❌   |
| Login              |   ✅   |   ❌  |   ❌   |
| Logout             |   ❌   |   ✅  |   ✅   |
| View Profile       |   ❌   |  Own |  Any  |
| Edit Profile       |   ❌   |  Own |  Any  |
| Watchlist          |   ❌   |  Own |  View |
| Favorites          |   ❌   |  Own |  View |
| Watch History      |   ❌   |  Own |  View |
| Continue Watching  |   ❌   |  Own |  View |
| Write Review       |   ❌   |   ✅  |   ✅   |
| Edit Own Review    |   ❌   |   ✅  |   ✅   |
| Delete Own Review  |   ❌   |   ✅  |   ✅   |
| Delete Any Review  |   ❌   |   ❌  |   ✅   |
| Write Comment      |   ❌   |   ✅  |   ✅   |
| Delete Own Comment |   ❌   |   ✅  |   ✅   |
| Delete Any Comment |   ❌   |   ❌  |   ✅   |
| Submit Report      |   ❌   |   ✅  |   ✅   |
| Request Movie      |   ❌   |   ✅  |   ✅   |
| View Analytics     |   ❌   |   ❌  |   ✅   |
| Manage Users       |   ❌   |   ❌  |   ✅   |
| Send Notifications |   ❌   |   ❌  |   ✅   |
| Access Admin Panel |   ❌   |   ❌  |   ✅   |

---

# 5. Ownership Rules

Every user owns their personal data.

Examples:

* Watchlist
* Favorites
* Watch History
* Profile
* Notifications

Only the owner (or an administrator where appropriate) can access or modify these resources.

---

# 6. Public Data

The following information is public.

* Movie details (from TMDB)
* TV show details (from TMDB)
* Reviews
* Comments

Public data can be viewed without authentication.

---

# 7. Private Data

Private data includes:

* Watchlist
* Favorites
* Watch History
* Continue Watching
* Notifications
* Profile settings

These resources require authentication and owner-level permissions.

---

# 8. Admin Responsibilities

Administrators can:

* Manage users
* Review reports
* Remove inappropriate reviews
* Remove inappropriate comments
* Send notifications
* View analytics
* Manage platform settings

Administrators should not need direct database access outside the application.

---

# 9. Future Moderator Role

A moderator role may be introduced later.

Moderators can:

* Hide reviews
* Hide comments
* Review reports
* Approve movie requests

Moderators cannot:

* Manage users
* Access analytics
* Change platform settings

---

# 10. Appwrite Permission Strategy

Each document should use Appwrite permissions.

Examples:

**Private collections**

* Read → Owner
* Update → Owner
* Delete → Owner

**Public collections**

* Read → Anyone
* Create → Authenticated users
* Update → Owner
* Delete → Owner or Admin

---

# 11. Collection Permission Blueprint

| Collection     | Read        | Create        | Update       | Delete      |
| -------------- | ----------- | ------------- | ------------ | ----------- |
| users          | Owner       | System        | Owner        | Owner       |
| watchlists     | Owner       | Owner         | Owner        | Owner       |
| favorites      | Owner       | Owner         | Owner        | Owner       |
| history        | Owner       | Owner         | Owner        | Owner       |
| reviews        | Public      | Authenticated | Owner        | Owner/Admin |
| comments       | Public      | Authenticated | Owner        | Owner/Admin |
| notifications  | Owner       | System/Admin  | System/Admin | Owner       |
| reports        | Owner/Admin | Authenticated | Admin        | Admin       |
| movie_requests | Owner/Admin | Authenticated | Admin        | Admin       |
| analytics      | Admin       | System        | Admin        | Admin       |

---

# 12. Route Authorization

## Public Routes

```text
/
/movies
/tvshows
/search
/watch/:type/:id
```

## User Routes

```text
/profile
/watchlist
/favorites
/settings
/history
```

## Admin Routes

```text
/admin
/admin/users
/admin/reports
/admin/analytics
/admin/settings
```

---

# 13. UI Authorization

The frontend should hide actions that users are not permitted to perform.

Examples:

Guest:

* Hide "Add to Watchlist"
* Hide "Favorite"
* Hide "Write Review"

User:

* Show personal features.

Admin:

* Display admin navigation.
* Display moderation actions.

UI visibility improves the user experience but does not replace backend permission checks.

---

# 14. Security Principles

Authorization should follow these principles:

* Least Privilege
* Owner-Based Access
* Role-Based Access Control (RBAC)
* Server-Enforced Permissions
* No Trust in Client-Side Validation

---

# 15. Authorization Flow

```text
User Request

↓

Authentication Check

↓

Determine User Role

↓

Check Resource Ownership

↓

Verify Permissions

↓

Allow or Deny Request
```

---

# 16. Engineering Decisions

### ADR-023

Private user data is accessible only by its owner.

Reason:

Protect user privacy.

---

### ADR-024

Administrative actions require a dedicated admin role.

Reason:

Prevent accidental or unauthorized access.

---

### ADR-025

Frontend authorization is for usability only.

Reason:

Real security must be enforced by Appwrite permissions.

---

### ADR-026

Permissions should be based on roles and ownership.

Reason:

Simple, scalable, and easy to maintain.

---

# 17. Future Improvements

Possible enhancements:

* Moderator dashboard
* Temporary account suspension
* User banning
* Warning system
* Role management UI
* Fine-grained permission groups
* Audit logs

---

# 18. Revision History

| Version | Date           | Description                                 |
| ------- | -------------- | ------------------------------------------- |
| 1.0     | Planning Phase | Initial authorization architecture created. |
