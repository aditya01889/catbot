# CatBot Development Guide

This guide provides detailed information for developing new features, fixing bugs, and maintaining the CatBot project.

## Table of Contents

1. [Project Structure](#project-structure)
2. [Adding a New Feature](#adding-a-new-feature)
3. [API Development](#api-development)
4. [Frontend Development](#frontend-development)
5. [Testing](#testing)
6. [Deployment](#deployment)
7. [Troubleshooting](#troubleshooting)

## Project Structure

```
catbot/
├── frontend/              # React frontend
│   ├── public/            # Static files
│   └── src/               # Source files
│       ├── components/    # Reusable components
│       ├── features/      # Feature modules
│       ├── services/      # API services
│       ├── utils/         # Utility functions
│       └── App.tsx        # Main app component
│
├── backend/               # FastAPI backend
│   ├── app/               # Application code
│   │   ├── api/           # API routes
│   │   ├── models/        # Database models
│   │   ├── services/      # Business logic
│   │   └── utils/         # Utility functions
│   └── tests/             # Backend tests
│
└── docs/                  # Documentation
```

## Adding a New Feature

1. **Create a feature branch**
   ```bash
   git checkout -b feature/feature-name
   ```

2. **Backend Development**
   - Create a new router in `backend/app/api/v1/`
   - Implement services in `backend/app/services/`
   - Add models in `backend/app/models/`
   - Write tests in `backend/tests/`

3. **Frontend Development**
   - Create a new feature module in `frontend/src/features/`
   - Add components in `frontend/src/components/`
   - Create API services in `frontend/src/services/`
   - Update the navigation if needed

4. **Testing**
   - Write unit tests for all new code
   - Test the feature manually
   - Update any affected documentation

5. **Code Review**
   - Create a pull request
   - Address review comments
   - Get approvals from required reviewers

## API Development

### Creating a New Endpoint

1. Create a new router in `backend/app/api/v1/`:
   ```python
   # backend/app/api/v1/example.py
   from fastapi import APIRouter, Depends
   
   router = APIRouter(prefix="/example", tags=["example"])
   
   @router.get("/")
   async def get_example():
       return {"message": "Hello, World!"}
   ```

2. Include the router in `backend/app/api/v1/__init__.py`:
   ```python
   from fastapi import APIRouter
   from . import example
   
   api_router = APIRouter()
   api_router.include_router(example.router)
   ```

### Data Validation

Use Pydantic models for request/response validation:

```python
from pydantic import BaseModel

class ItemCreate(BaseModel):
    name: str
    description: str = None
    price: float
    tax: float = None
```

## Frontend Development

### Component Structure

```typescript
// features/example/components/ExampleComponent.tsx
import React from 'react';
import { useExample } from '../hooks/useExample';

type ExampleComponentProps = {
  initialValue?: string;
};

export const ExampleComponent: React.FC<ExampleComponentProps> = ({
  initialValue = 'default',
}) => {
  const { data, isLoading, error } = useExample(initialValue);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <div>{data}</div>;
};
```

### API Integration

Create API services using React Query:

```typescript
// features/example/api/exampleApi.ts
import { apiClient } from '@/lib/apiClient';

export const fetchExampleData = async (param: string) => {
  const response = await apiClient.get(`/api/example?param=${param}`);
  return response.data;
};

// features/example/hooks/useExample.ts
import { useQuery } from 'react-query';
import { fetchExampleData } from '../api/exampleApi';

export const useExample = (param: string) => {
  return useQuery(['example', param], () => fetchExampleData(param), {
    enabled: !!param,
  });
};
```

## Testing

### Backend Tests

```python
# tests/test_example.py
def test_example_endpoint(client):
    response = client.get("/api/example")
    assert response.status_code == 200
    assert response.json() == {"message": "Hello, World!"}
```

### Frontend Tests

```typescript
// features/example/__tests__/ExampleComponent.test.tsx
import { render, screen } from '@testing-library/react';
import { ExampleComponent } from '../components/ExampleComponent';

describe('ExampleComponent', () => {
  it('renders with default value', () => {
    render(<ExampleComponent />);
    expect(screen.getByText('default')).toBeInTheDocument();
  });
});
```

## Deployment

### Backend

1. Build the Docker image:
   ```bash
   docker build -t catbot-backend -f backend/Dockerfile .
   ```

2. Run migrations:
   ```bash
   alembic upgrade head
   ```

3. Start the container:
   ```bash
   docker run -p 8000:8000 catbot-backend
   ```

### Frontend

1. Build for production:
   ```bash
   cd frontend
   npm run build
   ```

2. Serve the static files using Nginx or a similar web server.

## Troubleshooting

### Common Issues

1. **Database connection issues**
   - Verify the database URL in `.env`
   - Check if the database server is running
   - Run migrations with `alembic upgrade head`

2. **Frontend not connecting to backend**
   - Check CORS settings in the backend
   - Verify the API URL in frontend `.env`
   - Check the browser's developer console for errors

3. **Dependency issues**
   - Delete `node_modules` and run `npm install`
   - Recreate the Python virtual environment
   - Check for version conflicts in `package.json` and `requirements.txt`

### Debugging

#### Backend

Add debug logging:

```python
import logging
logger = logging.getLogger(__name__)

# In your code
logger.debug("Debug message")
logger.info("Info message")
logger.warning("Warning message")
logger.error("Error message")
```

#### Frontend

Use React Developer Tools and browser's developer console for debugging.

### Getting Help

- Check the project's GitHub issues
- Ask in the team's Slack channel
- Schedule a pairing session with a team member
