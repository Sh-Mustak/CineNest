# 05. Database Design

**Project:** CineNest

**Version:** 1.0

**Status:** Planning Phase

---

# 1. Purpose

This document defines the database design for CineNest.

The goal is to identify every collection required by the application, define the relationships between them, and establish clear rules about what data should and should not be stored.

The database stores only application-specific data.

Movie metadata remains the responsibility of TMDB.

---

# 2. Database Platform

Backend Platform:

**Appwrite Database**

Reasons:

* Fully managed
* Secure
* Built-in permissions
* SDK support
* Easy React integration
* Realtime support

---

# 3. Database Philosophy

CineNest follows a simple rule:

> Store only data that belongs to CineNest.

Examples:

Store:

* User Profile
* Watchlist
* Favorites
* Reviews
* Comments
* Watch History
* Notifications

Do NOT Store:

* Movie title
* Poster
* Cast
* Genres
* Runtime
* Ratings
* Trailers

Those belong to TMDB.

---

# 4. Primary Collections

The following collections are planned.

| Collection     | Purpose                    |
| -------------- | -------------------------- |
| users          | User profile information   |
| watchlists     | User watchlist             |
| favorites      | Favorite movies & TV shows |
| history        | Watch history              |
| reviews        | User reviews               |
| comments       | User comments              |
| notifications  | User notifications         |
| reports        | Broken link reports        |
| movie_requests | Content requests           |
| analytics      | User activity analytics    |

---

# 5. Entity Relationship Overview

```text
User
│
├── Watchlist
├── Favorites
├── History
├── Reviews
├── Comments
├── Notifications
├── Reports
├── Movie Requests
└── Analytics
```

Every collection belongs to a user except where noted otherwise.

---

# 6. Relationship Strategy

The database uses a user-centric design.

One user can have:

* Many favorites
* Many watchlist items
* Many history records
* Many comments
* Many reviews
* Many notifications

Relationships are primarily one-to-many.

---

# 7. Movie References

Movies are **not stored** in the database.

Instead, CineNest stores references.

Example:

```text
movieId = 550
mediaType = movie
```

The frontend uses these references to request complete movie details from TMDB.

This avoids data duplication and keeps movie information current.

---

# 8. TV Series References

TV series follow the same strategy.

Store:

* tmdbId
* mediaType

Retrieve all metadata from TMDB when needed.

---

# 9. User Data Strategy

Appwrite Authentication manages the account.

The database stores additional profile information only.

Examples:

* Display name
* Avatar URL
* Bio
* Preferences

Authentication data remains managed by Appwrite.

---

# 10. Data Consistency

The database should avoid duplicated information.

Example:

Do NOT store:

Movie title

Movie poster

Movie overview

Instead:

Store:

TMDB ID

Media Type

Everything else comes from TMDB.

---

# 11. Deletion Strategy

When a user deletes their account:

Remove:

* Favorites
* Watchlist
* History
* Reviews
* Comments
* Notifications
* Reports
* Requests

This keeps the database clean.

---

# 12. Soft Delete vs Hard Delete

Current strategy:

Hard delete for user-generated content.

Future versions may support soft deletes for moderation and recovery.

---

# 13. Indexing Strategy

Collections should use indexes for frequently queried fields.

Examples:

* userId
* tmdbId
* createdAt
* updatedAt
* mediaType

Proper indexing improves query performance.

---

# 14. Data Validation

Every collection should validate:

* Required fields
* Allowed values
* Maximum lengths
* Data types

Validation occurs before saving data.

---

# 15. Security Principles

Each user should access only their own private data unless a collection is intentionally public.

Examples:

Private:

* Watchlist
* Favorites
* History

Public:

* Reviews
* Comments

Administrative collections require elevated permissions.

---

# 16. Scalability

The database design supports future features such as:

* Continue Watching
* AI Recommendations
* User Following
* Watch Parties
* Achievements
* Moderator Tools

without major schema changes.

---

# 17. Engineering Decisions

### ADR-013

Movies are referenced by TMDB ID instead of duplicated.

Reason:

Avoid stale data and unnecessary storage.

---

### ADR-014

Collections are organized around user activities rather than movie records.

Reason:

User-generated data changes frequently, while movie metadata is managed externally.

---

### ADR-015

Every collection should have a single responsibility.

Reason:

Improves maintainability and simplifies permissions.

---

# 18. Planned Collections Summary

| Collection     | Status  |
| -------------- | ------- |
| users          | Planned |
| watchlists     | Planned |
| favorites      | Planned |
| history        | Planned |
| reviews        | Planned |
| comments       | Planned |
| notifications  | Planned |
| reports        | Planned |
| movie_requests | Planned |
| analytics      | Planned |

---

# 19. Revision History

| Version | Date           | Description                      |
| ------- | -------------- | -------------------------------- |
| 1.0     | Planning Phase | Initial database design created. |
