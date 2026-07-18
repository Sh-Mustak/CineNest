# 06. Appwrite Collections

**Project:** CineNest

**Version:** 1.0

**Status:** Planning Phase

---

# 1. Purpose

This document defines every Appwrite collection used by CineNest.

For each collection we specify:

* Purpose
* Attributes
* Data types
* Required fields
* Relationships
* Index recommendations
* Permission strategy

This document should be treated as the source of truth when implementing the Appwrite database.

---

# 2. Database Overview

Database Name:

```
cinenest
```

Collections:

```
users
watchlists
favorites
history
reviews
comments
notifications
reports
movie_requests
analytics
```

---

# 3. Collection Naming Rules

* Collection names use lowercase.
* Collection names use snake_case where necessary.
* Attribute names use camelCase.
* IDs are managed by Appwrite unless otherwise specified.

Example:

```
watchlists
```

Attributes:

```
userId
tmdbId
mediaType
createdAt
```

---

# 4. Collection: users

## Purpose

Stores additional profile information that is not part of Appwrite Authentication.

### Attributes

| Field     | Type     | Required | Description         |
| --------- | -------- | -------- | ------------------- |
| userId    | String   | Yes      | Appwrite User ID    |
| username  | String   | Yes      | Public username     |
| avatarUrl | String   | No       | User avatar         |
| bio       | String   | No       | User biography      |
| country   | String   | No       | Country             |
| createdAt | Datetime | Yes      | Account creation    |
| updatedAt | Datetime | Yes      | Last profile update |

### Relationships

One user → One profile

### Recommended Indexes

* userId
* username

---

# 5. Collection: watchlists

## Purpose

Stores movies and TV shows saved by users.

### Attributes

| Field     | Type     |
| --------- | -------- |
| userId    | String   |
| tmdbId    | Integer  |
| mediaType | String   |
| addedAt   | Datetime |

### Relationships

One User

↓

Many Watchlist Items

### Indexes

* userId
* tmdbId

---

# 6. Collection: favorites

Purpose:

Stores favorite movies and TV shows.

### Attributes

| Field     | Type     |
| --------- | -------- |
| userId    | String   |
| tmdbId    | Integer  |
| mediaType | String   |
| addedAt   | Datetime |

Indexes:

* userId
* tmdbId

---

# 7. Collection: history

Purpose:

Stores watch history.

### Attributes

| Field     | Type     |
| --------- | -------- |
| userId    | String   |
| tmdbId    | Integer  |
| mediaType | String   |
| progress  | Integer  |
| watchedAt | Datetime |
| completed | Boolean  |

Indexes:

* userId
* watchedAt

---

# 8. Collection: reviews

Purpose:

Stores movie reviews.

### Attributes

| Field     | Type     |
| --------- | -------- |
| userId    | String   |
| tmdbId    | Integer  |
| mediaType | String   |
| rating    | Integer  |
| review    | String   |
| createdAt | Datetime |
| updatedAt | Datetime |

Indexes:

* tmdbId
* userId

---

# 9. Collection: comments

Purpose:

Stores discussion comments.

### Attributes

| Field     | Type     |
| --------- | -------- |
| userId    | String   |
| tmdbId    | Integer  |
| mediaType | String   |
| comment   | String   |
| createdAt | Datetime |

Indexes:

* tmdbId
* createdAt

---

# 10. Collection: notifications

Purpose:

Stores user notifications.

### Attributes

| Field     | Type     |
| --------- | -------- |
| userId    | String   |
| title     | String   |
| message   | String   |
| isRead    | Boolean  |
| createdAt | Datetime |

Indexes:

* userId
* isRead

---

# 11. Collection: reports

Purpose:

Stores broken streaming reports.

### Attributes

| Field      | Type     |
| ---------- | -------- |
| userId     | String   |
| tmdbId     | Integer  |
| serverName | String   |
| reason     | String   |
| createdAt  | Datetime |

Indexes:

* tmdbId

---

# 12. Collection: movie_requests

Purpose:

Stores requests for unavailable movies or TV shows.

### Attributes

| Field     | Type     |
| --------- | -------- |
| userId    | String   |
| title     | String   |
| mediaType | String   |
| message   | String   |
| status    | String   |
| createdAt | Datetime |

Indexes:

* status
* userId

---

# 13. Collection: analytics

Purpose:

Stores anonymous application analytics.

### Attributes

| Field     | Type              |
| --------- | ----------------- |
| userId    | String (Optional) |
| event     | String            |
| page      | String            |
| device    | String            |
| country   | String            |
| createdAt | Datetime          |

Indexes:

* event
* createdAt

---

# 14. Permission Strategy

| Collection     | Read        | Write        |
| -------------- | ----------- | ------------ |
| users          | Owner       | Owner        |
| watchlists     | Owner       | Owner        |
| favorites      | Owner       | Owner        |
| history        | Owner       | Owner        |
| reviews        | Public      | Owner        |
| comments       | Public      | Owner        |
| notifications  | Owner       | System/Admin |
| reports        | Owner/Admin | Owner        |
| movie_requests | Owner/Admin | Owner        |
| analytics      | Admin       | System       |

---

# 15. Future Collections

The following collections may be added later:

```
continue_watching

achievements

user_preferences

follow_users

watch_parties

admin_logs
```

---

# 16. Collection Relationships

```
User
│
├── users
├── watchlists
├── favorites
├── history
├── reviews
├── comments
├── notifications
├── reports
├── movie_requests
└── analytics
```

---

# 17. Engineering Decisions

### ADR-016

Collections are separated by feature instead of combining all user data into one document.

Reason:

Smaller documents improve scalability and querying.

---

### ADR-017

Movie metadata is referenced by TMDB ID.

Reason:

Avoid duplicated storage.

---

### ADR-018

Permissions are enforced at the collection and document level.

Reason:

Improve security and prevent unauthorized access.

---

# 18. Revision History

| Version | Date           | Description                           |
| ------- | -------------- | ------------------------------------- |
| 1.0     | Planning Phase | Initial Appwrite collection blueprint |
