# 02. System Architecture

**Project:** CineNest

**Version:** 1.0

**Status:** Planning Phase

---

# 1. Purpose

This document describes the overall architecture of the CineNest platform.

Its objective is to explain how the frontend, backend, external APIs, and streaming providers interact to deliver content to users while maintaining a scalable and maintainable architecture.

This document serves as the architectural blueprint for future development.

---

# 2. High-Level Architecture

CineNest follows a client-server architecture with external service integrations.

```
                    ┌─────────────────────────────┐
                    │          User               │
                    └──────────────┬──────────────┘
                                   │
                                   ▼
                    ┌─────────────────────────────┐
                    │     React Frontend          │
                    │        (Vite)               │
                    └──────────────┬──────────────┘
                                   │
              ┌────────────────────┼────────────────────┐
              │                    │                    │
              ▼                    ▼                    ▼
     ┌────────────────┐   ┌─────────────────┐   ┌────────────────────┐
     │   TMDB API     │   │    Appwrite     │   │ Streaming Providers│
     │ Movie Metadata │   │ Backend Services│   │ External Video Hosts│
     └────────────────┘   └─────────────────┘   └────────────────────┘
```

---

# 3. Architectural Components

The system consists of four primary components.

## Frontend

Responsible for:

* User interface
* Routing
* State management
* Search
* Filters
* Watch page
* User interactions

Technology:

* React
* Vite
* React Router
* Context API

---

## TMDB

Responsible for:

* Movie metadata
* TV metadata
* Genres
* Cast
* Trailers
* Posters
* Ratings
* Recommendations

TMDB is considered the authoritative source of entertainment data.

CineNest does not duplicate this information inside Appwrite.

---

## Appwrite

Responsible for all application-specific data.

Examples include:

* Authentication
* User profiles
* Watchlists
* Favorites
* Watch history
* Continue watching
* Reviews
* Comments
* Notifications
* Reports
* Admin data

Appwrite becomes the primary backend service.

---

## Streaming Providers

Responsible only for:

* Video playback
* Embedded players
* Video streaming

Streaming providers are not responsible for user management or application data.

---

# 4. Separation of Responsibilities

| Component           | Responsibility             |
| ------------------- | -------------------------- |
| React               | User Interface             |
| TMDB                | Entertainment Metadata     |
| Appwrite            | User Data & Business Logic |
| Streaming Providers | Video Streaming            |

Each system has a clearly defined responsibility.

This minimizes duplication and simplifies maintenance.

---

# 5. Data Ownership

Understanding who owns which data is critical.

## TMDB Owns

* Movie title
* TV title
* Description
* Genres
* Runtime
* Release date
* Cast
* Crew
* Posters
* Backdrops
* Ratings
* Similar movies

---

## Appwrite Owns

* User accounts
* User profile
* Favorites
* Watchlist
* Watch history
* Continue watching
* Reviews
* Comments
* Notifications
* Reports
* Admin settings

---

## Streaming Providers Own

* Video files
* Streaming URLs
* Playback quality
* Server availability

---

# 6. Data Flow

## Movie Discovery

```
User

↓

React

↓

TMDB API

↓

Movie Data

↓

React UI
```

---

## Watching a Movie

```
User

↓

React

↓

TMDB

↓

Movie Details

↓

Streaming Provider

↓

Video Playback
```

---

## Saving a Favorite

```
User

↓

React

↓

Appwrite Authentication

↓

Appwrite Database

↓

Favorite Saved

↓

React Updates UI
```

---

## Continue Watching

```
User

↓

Streaming Starts

↓

React Tracks Progress

↓

Appwrite Database

↓

Watch Progress Saved
```

---

# 7. System Layers

The application is divided into logical layers.

```
Presentation Layer
        │
React Components
        │
Custom Hooks
        │
Service Layer
        │
API Layer
        │
────────────────────────
External Services
(TMDB + Appwrite + Streaming)
```

Each layer has a single responsibility.

---

# 8. Communication Strategy

### React → TMDB

Purpose:

Retrieve movie information.

Communication:

REST API

---

### React → Appwrite

Purpose:

Authentication and user-specific data.

Communication:

Appwrite SDK

---

### React → Streaming Providers

Purpose:

Embedded video playback.

Communication:

Embedded player URLs.

---

# 9. Error Handling Strategy

The application should gracefully handle:

* TMDB unavailable
* Streaming server unavailable
* Network failures
* Invalid routes
* Authentication failures
* Database errors

The user should always receive clear feedback rather than a blank page.

---

# 10. Security Boundaries

The frontend should never:

* Store sensitive credentials.
* Trust user input.
* Perform authorization checks alone.

Appwrite is responsible for:

* Authentication
* Authorization
* Database permissions
* Session management

---

# 11. Scalability Considerations

The architecture is designed to support future expansion.

Possible future enhancements include:

* AI recommendations
* Progressive Web App
* Push notifications
* Moderator dashboard
* Self-hosted backend services
* Self-hosted streaming infrastructure
* Native mobile applications

These additions should not require significant architectural changes.

---

# 12. Architectural Principles

The CineNest architecture follows these principles:

* Separation of Concerns
* Single Responsibility Principle
* Modular Design
* Stateless Frontend
* Externalized Movie Metadata
* Backend-Driven User Data
* Reusable Components
* Scalable Service Architecture

---

# 13. Architecture Decisions

### ADR-001

Movie metadata will not be stored inside Appwrite.

Reason:

TMDB is the authoritative source of movie information.

---

### ADR-002

User-specific data will be stored exclusively inside Appwrite.

Reason:

User data must remain persistent across devices and sessions.

---

### ADR-003

Streaming content will remain external.

Reason:

CineNest is not responsible for hosting or distributing video content.

---

### ADR-004

Frontend and backend responsibilities remain clearly separated.

Reason:

This improves maintainability, scalability, and testing.

---

# 14. Future Evolution

The current architecture allows future migration to a custom backend if required.

Possible migration path:

React

↓

Node.js API

↓

PostgreSQL

↓

Redis

↓

Object Storage

↓

CDN

without requiring a complete frontend rewrite.

---

# 15. Revision History

| Version | Date           | Description                          |
| ------- | -------------- | ------------------------------------ |
| 1.0     | Planning Phase | Initial system architecture created. |
