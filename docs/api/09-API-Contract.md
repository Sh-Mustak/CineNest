# 09. API Contract

**Project:** CineNest

**Version:** 1.0

**Status:** Planning Phase

---

# 1. Purpose

This document defines the logical API contract used by CineNest.

Although CineNest uses Appwrite SDK instead of a custom REST API, the frontend will interact with the backend through service modules that behave like an API.

This document defines:

* Business rules
* Validation rules
* Authentication requirements
* Authorization requirements
* Expected responses
* Error handling

The API Contract serves as the functional specification for backend development.

---

# 2. General Rules

All authenticated operations require a valid Appwrite session.

Every operation should:

* Validate user input.
* Validate authentication.
* Validate authorization.
* Return meaningful errors.
* Never expose sensitive information.

---

# 3. Authentication

## Register User

### Purpose

Create a new CineNest account.

### Required Fields

* Email
* Password
* Name

### Validation

* Valid email format
* Password ≥ 8 characters
* Name is required

### Success

* User account created
* Verification email sent

### Errors

* Email already exists
* Invalid email
* Weak password

---

## Login

### Required

* Email
* Password

### Success

* Session created
* User returned

### Errors

* Invalid credentials
* Email not verified

---

## Logout

### Authentication

Required

### Success

Current session deleted.

---

# 4. User Profile

## Get Profile

Authentication:

Required

Returns:

* Name
* Email
* Avatar
* Bio
* Country

---

## Update Profile

Authentication:

Required

Editable:

* Name
* Avatar
* Bio
* Country

Business Rules:

* Users may edit only their own profile.

---

# 5. Watchlist

## Add to Watchlist

Authentication:

Required

Required Data:

* tmdbId
* mediaType

Business Rules:

* A movie may appear only once in a user's watchlist.
* mediaType must be either `movie` or `tv`.
* Only the owner can create entries.

Success:

Watchlist item created.

Errors:

* Already exists
* Invalid media type
* Not authenticated

---

## Remove from Watchlist

Authentication:

Required

Business Rules:

* Only the owner may remove items.

---

## Get Watchlist

Authentication:

Required

Returns:

Current user's watchlist.

---

# 6. Favorites

## Add Favorite

Authentication:

Required

Rules:

* Unique per user.
* Duplicate entries are not allowed.

---

## Remove Favorite

Authentication:

Required

Owner only.

---

## Get Favorites

Authentication:

Required

Returns all favorites belonging to the authenticated user.

---

# 7. Watch History

## Save Watch Progress

Authentication:

Required

Required Data:

* tmdbId
* mediaType
* progress

Business Rules:

* If history exists, update it.
* Otherwise create a new entry.

---

## Get Watch History

Authentication:

Required

Returns viewing history.

---

# 8. Continue Watching

Authentication:

Required

Returns unfinished content sorted by the most recent viewing activity.

---

# 9. Reviews

## Create Review

Authentication:

Required

Required Fields:

* tmdbId
* mediaType
* rating
* review

Business Rules:

* One review per movie per user.
* Rating must be between 1 and 10.
* Review text cannot be empty.

---

## Update Review

Authentication:

Required

Owner only.

---

## Delete Review

Authentication:

Required

Owner or Admin.

---

## Get Reviews

Public

Returns reviews for the selected movie or TV show.

---

# 10. Comments

## Create Comment

Authentication:

Required

Business Rules:

* Comment cannot be empty.
* Maximum length: 1000 characters.

---

## Delete Comment

Owner or Admin.

---

## Get Comments

Public.

---

# 11. Notifications

## Get Notifications

Authentication:

Required

Returns notifications for the authenticated user.

---

## Mark as Read

Authentication:

Required

Owner only.

---

# 12. Reports

## Report Broken Link

Authentication:

Required

Required Fields:

* tmdbId
* serverName
* reason

Business Rules:

* A user may submit multiple reports.
* Reports are visible to administrators.

---

# 13. Movie Requests

## Request Movie

Authentication:

Required

Required Fields:

* Title
* Media Type
* Optional Message

Business Rules:

* Empty titles are not allowed.
* Duplicate requests may be merged by administrators.

---

# 14. Analytics

Analytics events are created automatically by the application.

Examples:

* Login
* Logout
* Search
* Play Movie
* Add Favorite
* Add Watchlist
* Report Link

Users cannot manually create analytics events.

---

# 15. Admin Operations

Administrator-only actions include:

* View users
* Delete reviews
* Delete comments
* View reports
* Manage movie requests
* Send notifications
* View analytics

---

# 16. Standard Error Responses

Possible logical errors include:

* Unauthorized
* Forbidden
* Validation Failed
* Resource Not Found
* Duplicate Resource
* Internal Error

Frontend services should convert backend errors into user-friendly messages.

---

# 17. Business Rules Summary

* Guests may browse but cannot modify data.
* Watchlist entries must be unique per user.
* Favorites must be unique per user.
* One review per movie per user.
* Users may edit only their own content.
* Administrators may moderate public content.
* Authentication is required for all user-specific actions.

---

# 18. Engineering Decisions

### ADR-027

Business rules are documented separately from the database schema.

Reason:

Keeps the database focused on storage while the API contract defines application behavior.

---

### ADR-028

Frontend communicates only through backend service modules.

Reason:

Prevents UI components from depending directly on Appwrite APIs.

---

# 19. Revision History

| Version | Date           | Description                        |
| ------- | -------------- | ---------------------------------- |
| 1.0     | Planning Phase | Initial API contract for CineNest. |
