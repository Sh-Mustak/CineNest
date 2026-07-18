# 03. Frontend Architecture

**Project:** CineNest

**Version:** 1.0

**Document Version:** 1.1

**Status:** Current Implementation + Planned Backend Integration

---

# 1. Purpose

This document describes the frontend architecture of CineNest.

It explains how the React application is organized, how data flows throughout the system, how responsibilities are separated, and how the frontend is prepared for future Appwrite integration.

The frontend is designed around modularity, maintainability, scalability, and code reusability.

---

# 2. Frontend Technology Stack

| Technology    | Purpose                 |
| ------------- | ----------------------- |
| React 19      | UI Development          |
| Vite          | Build Tool              |
| React Router  | Client-side Routing     |
| Context API   | Global State Management |
| Axios         | HTTP Communication      |
| Tailwind CSS  | Styling                 |
| Framer Motion | Animations              |

---

# 3. Frontend Goals

The frontend should:

* Provide a responsive user experience.
* Separate UI from business logic.
* Keep components reusable.
* Keep API communication centralized.
* Support future backend integration without major refactoring.
* Minimize duplicated code.

---

# 4. Project Structure

```text
src/

├── api/
├── components/
├── context/
├── hooks/
├── pages/
├── services/
├── utils/

├── App.jsx
├── main.jsx
```

Every folder has a single responsibility.

---

# 5. Folder Responsibilities

## api/

The API layer communicates with external services.

Current files:

```text
api/

axiosInstance.js

endpoints.js

movieService.js

tvSeriesService.js

searchService.js

servers.js
```

Responsibilities:

* Axios configuration
* API endpoint definitions
* TMDB requests
* Search requests
* Streaming server configuration

This layer should never contain UI logic.

---

## services/

The service layer prepares data for the application.

Current files:

```text
services/

mediaFetcher.js

movieFetcher.js

prefetchMovie.js

searchFetcher.js

tvSeriesFetcher.js
```

Responsibilities:

* Fetch data
* Combine API responses
* Prepare media objects
* Reduce duplication
* Abstract API implementation

The UI should never communicate directly with the API layer.

---

## hooks/

Reusable application logic.

Current hooks:

```text
useDiscover()

useEpisodes()

useHeroSlider()

useMedia()

useMediaDetails()

useScrollLock()

useSearch()

useWatchlistLogic()
```

Responsibilities:

* Encapsulate business logic
* Manage component state
* Reuse logic across pages
* Coordinate data loading

Hooks should never render UI.

---

## context/

Global application state.

Current contexts:

* MovieContext
* WatchContext
* WatchlistContext

Responsibilities:

* Share data across components
* Eliminate prop drilling
* Store application-wide state

Context should only store data that is needed by multiple components.

---

## components/

Reusable UI building blocks.

Current structure:

```text
components/

filters/

layout/

movie/

moviesPage/

watch/

Skeleton/

ui/
```

Responsibilities:

* Render UI
* Display data
* Handle local interactions

Components should avoid business logic whenever possible.

---

## pages/

Route-level components.

Current pages:

```text
Home

Movies

TvShows

Search

Watch

WatchList
```

Responsibilities:

* Compose components
* Load required hooks
* Coordinate page layout

Pages should remain thin and delegate work to hooks and components.

---

## utils/

Pure helper functions.

Current utilities:

* adaptMoviesForHero
* getDirector
* helper
* minToHour
* newEpisode
* watchTabs

Utilities should:

* Be reusable
* Have no side effects
* Not depend on React

---

# 6. Routing Architecture

Current routes:

| Route            | Description     |
| ---------------- | --------------- |
| /                | Home Page       |
| /movies          | Movie Discovery |
| /tvshows         | TV Discovery    |
| /search          | Search Results  |
| /watch/:type/:id | Watch Page      |
| /watchlist       | User Watchlist  |

Navigation components remain outside the routing system.

Persistent layout:

* Navbar
* Footer
* Bottom Navigation
* Toast

---

# 7. Current Data Flow

The frontend follows a layered architecture.

```text
User

↓

Page

↓

Hook

↓

Service

↓

API

↓

TMDB

↓

Service

↓

Hook

↓

Context (Optional)

↓

Component

↓

User Interface
```

Every layer has a single responsibility.

---

# 8. Watch Page Flow

The Watch page is currently the most complex page.

Flow:

```text
User Opens Watch Page

↓

React Router

↓

Watch Page

↓

useMediaDetails()

↓

movieService()

↓

TMDB

↓

Movie Details Returned

↓

Streaming Server Selected

↓

Embedded Player Rendered

↓

User Starts Watching
```

Future backend additions:

* Save watch history
* Continue watching
* Reviews
* Comments
* Favorites

---

# 9. Search Flow

```text
User Types

↓

Debounce

↓

useSearch()

↓

searchFetcher()

↓

searchService()

↓

TMDB Search API

↓

Results Returned

↓

Search Page Updated
```

Debouncing reduces unnecessary API requests.

---

# 10. State Management Strategy

Current global state:

* MovieContext
* WatchContext
* WatchlistContext

Future backend state:

* User
* Authentication
* Notifications
* Favorites
* Continue Watching

Only shared state belongs in Context.

Temporary UI state remains local.

---

# 11. Error Handling Strategy

Current strategy includes handling:

* Loading states
* Skeleton screens
* Empty results
* API failures
* Missing images
* Invalid routes
* Streaming failures

The UI should always provide meaningful feedback.

---

# 12. Performance Strategy

Current optimizations:

* Infinite scrolling
* Skeleton loading
* Debounced search
* Component reuse
* Context sharing

Future optimizations:

* Route-based code splitting
* Lazy loading
* Request caching
* Image optimization
* Memoization where appropriate

---

# 13. Planned Backend Integration

Current frontend:

```text
React

↓

TMDB
```

Planned architecture:

```text
                 React

        ↙                ↘

     TMDB             Appwrite

Metadata          User Data

Movies            Authentication

TV Shows          Watchlist

Cast              Favorites

Trailers          Watch History

Genres            Reviews

                  Comments

                  Notifications
```

The frontend will communicate with both systems independently.

---

# 14. Planned Folder Evolution

Current:

```text
api/

services/

hooks/

context/
```

Future:

```text
api/
    TMDB

backend/
    Appwrite

services/
    Business Logic

hooks/
    React Logic

context/
    Global State

components/
    UI
```

This separation keeps external APIs and backend logic independent.

---

# 15. Frontend Design Principles

The frontend follows these principles:

* Single Responsibility Principle
* Separation of Concerns
* Reusable Components
* Modular Architecture
* Layered Data Flow
* Centralized API Communication
* Clean Folder Structure

---

# 16. Engineering Decisions

### ADR-005

TMDB communication is isolated inside the API layer.

Reason:

Changing the movie provider should require minimal changes to the UI.

---

### ADR-006

Business logic belongs inside custom hooks and services.

Reason:

Keeps components focused on presentation.

---

### ADR-007

Global state uses Context API.

Reason:

The current application size does not require Redux or another state management library.

---

### ADR-008

Pages remain lightweight.

Reason:

Pages should coordinate features, not implement business logic.

---

# 17. Future Improvements

Planned frontend enhancements include:

* User authentication
* Profile management
* Continue Watching
* Favorites synchronization
* Offline support
* Progressive Web App (PWA)
* Theme switching
* Route-based code splitting
* Lazy loading
* Accessibility improvements

---

# 18. Revision History

| Version | Date          | Description                                                                             |
| ------- | ------------- | --------------------------------------------------------------------------------------- |
| 1.0     | Initial draft | Generic frontend architecture                                                           |
| 1.1     | Current       | Updated to match the actual CineNest project structure and planned Appwrite integration |
