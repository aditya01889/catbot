# CatBot API Documentation

## Base URL

```
https://api.catbot.dev  # Production
http://localhost:8000   # Development
```

## Authentication

CatBot uses JWT (JSON Web Tokens) for authentication. Include the token in the `Authorization` header:

```
Authorization: Bearer <your_jwt_token>
```

## API Endpoints

### Authentication

#### Login

```http
POST /api/v1/auth/login
```

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "securepassword"
}
```

**Response:**
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "token_type": "bearer"
}
```

### User

#### Get Current User

```http
GET /api/v1/users/me
```

**Response:**
```json
{
  "id": "user_123",
  "email": "user@example.com",
  "name": "John Doe",
  "preferences": {
    "theme": "dark",
    "notifications": true
  }
}
```

### Check-ins

#### Create Check-in

```http
POST /api/v1/checkins
```

**Request Body:**
```json
{
  "mood": "happy",
  "note": "Feeling great today!"
}
```

**Response:**
```json
{
  "id": "checkin_123",
  "user_id": "user_123",
  "mood": "happy",
  "note": "Feeling great today!",
  "created_at": "2023-10-26T10:30:00Z"
}
```

### Focus Sessions

#### Start Focus Session

```http
POST /api/v1/focus/sessions
```

**Request Body:**
```json
{
  "duration_minutes": 25,
  "task": "Write blog post"
}
```

**Response:**
```json
{
  "id": "session_123",
  "user_id": "user_123",
  "duration_minutes": 25,
  "task": "Write blog post",
  "started_at": "2023-10-26T10:30:00Z",
  "status": "in_progress"
}
```

## Error Handling

Errors follow this format:

```json
{
  "detail": [
    {
      "loc": ["string"],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

## Rate Limiting

API is rate limited to 100 requests per minute per IP address.

## Webhooks

Coming soon for real-time updates.

## SDKs

- JavaScript/TypeScript SDK (coming soon)
- Python SDK (coming soon)
