# 14. Coding Standards

**Project:** CineNest

**Version:** 1.0

**Status:** Planning Phase

---

# 1. Purpose

This document defines the coding standards for CineNest.

The goals are to:

* Keep the codebase clean.
* Improve readability.
* Reduce bugs.
* Maintain consistency.
* Make future maintenance easier.

All contributors should follow these standards.

---

# 2. General Principles

Code should be:

* Simple
* Readable
* Reusable
* Modular
* Consistent
* Testable

Avoid clever code that is difficult to understand.

---

# 3. Project Structure

Frontend:

```text
src/

api/
components/
context/
hooks/
pages/
services/
utils/
```

Backend (future):

```text
backend/

config/
services/
repositories/
functions/
middleware/
utils/
```

Documentation:

```text
docs/
```

---

# 4. Naming Conventions

## Components

Use PascalCase.

Examples:

```text
MovieCard.jsx
HeroSlider.jsx
Navbar.jsx
WatchPlayer.jsx
```

---

## Hooks

Always start with `use`.

Examples:

```text
useMovies.js
useSearch.js
useWatchlist.js
```

---

## Context

Examples:

```text
AuthContext.jsx
MovieContext.jsx
WatchlistContext.jsx
```

---

## Utility Functions

Use camelCase.

Examples:

```text
formatRuntime.js
getDirector.js
generateSlug.js
```

---

## Variables

Use meaningful names.

Good:

```javascript
const selectedMovie = ...
```

Bad:

```javascript
const x = ...
```

---

# 5. Folder Responsibilities

## components/

Reusable UI only.

No business logic.

---

## hooks/

Reusable logic.

Examples:

* Fetching
* Pagination
* Search
* Infinite Scroll

---

## services/

All communication with Appwrite and external APIs.

React components should never call Appwrite directly.

---

## pages/

Route-level components only.

---

## utils/

Pure helper functions.

---

# 6. Component Guidelines

Each component should have a single responsibility.

Good:

* MovieCard
* GenreFilter
* HeroSlider

Avoid components that do many unrelated tasks.

---

# 7. State Management

Use:

* Local state for component-specific data.
* Context for global state.
* Keep state as close as possible to where it is used.

Avoid unnecessary global state.

---

# 8. Error Handling

Always handle:

* Loading
* Success
* Empty state
* Error state

Never assume API requests always succeed.

---

# 9. Comments

Write comments only when they explain *why*, not *what*.

Good:

```javascript
// Prevent duplicate watchlist entries.
```

Avoid obvious comments like:

```javascript
// Increment i.
```

---

# 10. Git Commit Convention

Recommended format:

```text
feat: add authentication

fix: resolve watchlist duplication

refactor: simplify search hook

docs: update API contract

style: improve movie card spacing

test: add authentication tests
```

---

# 11. Branch Naming

Examples:

```text
feature/authentication

feature/watchlist

feature/reviews

bugfix/login

docs/system-architecture

refactor/search
```

---

# 12. Import Order

Recommended order:

1. React
2. Third-party libraries
3. Internal modules
4. Components
5. Hooks
6. Context
7. Utilities
8. CSS

Example:

```javascript
import { useState } from "react";

import { useNavigate } from "react-router-dom";

import MovieCard from "../components/movie/MovieCard";

import useSearch from "../hooks/useSearch";

import "../App.css";
```

---

# 13. File Length Guidelines

Recommended limits:

* Component: < 300 lines
* Hook: < 200 lines
* Utility: < 100 lines
* Service: < 250 lines

If a file grows too large, split it into smaller modules.

---

# 14. Code Review Checklist

Before committing:

* Code is readable.
* No duplicate logic.
* No unused imports.
* No unused variables.
* Proper error handling.
* Meaningful variable names.
* Responsive UI tested.
* Documentation updated if needed.

---

# 15. Engineering Principles

Follow these principles:

* DRY (Don't Repeat Yourself)
* KISS (Keep It Simple, Stupid)
* SOLID (where appropriate)
* Separation of Concerns
* Single Responsibility Principle

---

# 16. Engineering Decisions

### ADR-041

Business logic belongs in services and hooks.

Reason:

Keeps UI components simple and reusable.

---

### ADR-042

Components should have a single responsibility.

Reason:

Improves readability and maintainability.

---

### ADR-043

Naming conventions are mandatory.

Reason:

Consistency improves developer experience.

---

# 17. Revision History

| Version | Date           | Description                           |
| ------- | -------------- | ------------------------------------- |
| 1.0     | Planning Phase | Initial coding standards established. |
