# Getting Started with CatBot

Welcome to the CatBot development team! This guide will help you set up your development environment and get started with the project.

## Prerequisites

- **Node.js** (v18 or later)
- **Python** (3.9 or later)
- **Git**
- **PostgreSQL** (for local development)
- **Docker** (optional, for containerized development)

## Development Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/catbot.git
cd catbot
```

### 2. Backend Setup

#### Create and activate a virtual environment:

```bash
# Windows
python -m venv venv
.\venv\Scripts\activate

# macOS/Linux
python3 -m venv venv
source venv/bin/activate
```

#### Install dependencies:

```bash
cd backend
pip install -r requirements.txt
```

#### Set up environment variables:

```bash
cp .env.example .env
# Edit .env with your configuration
```

#### Initialize the database:

```bash
alembic upgrade head
```

#### Run the development server:

```bash
uvicorn app.main:app --reload
```

The API will be available at `http://localhost:8000`

### 3. Frontend Setup

#### Install dependencies:

```bash
cd frontend
npm install
```

#### Set up environment variables:

```bash
cp .env.example .env
# Edit .env with your configuration
```

#### Start the development server:

```bash
npm start
```

The frontend will be available at `http://localhost:3000`

## Development Workflow

1. **Branch Naming**:
   - `feature/feature-name` for new features
   - `bugfix/description` for bug fixes
   - `docs/description` for documentation changes

2. **Commit Messages**:
   - Use the conventional commit format:
     - `feat: add user authentication`
     - `fix: resolve login issue`
     - `docs: update API documentation`

3. **Pull Requests**:
   - Create a draft PR early for WIP features
   - Request reviews from at least one team member
   - Ensure all tests pass before marking as ready for review

## Testing

### Backend Tests

```bash
# Run all tests
pytest

# Run tests with coverage
pytest --cov=app tests/
```

### Frontend Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch
```

## Code Style

### Backend
- Follow [PEP 8](https://www.python.org/dev/peps/pep-0008/)
- Use type hints
- Run `black .` and `isort .` before committing

### Frontend
- Follow [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- Use TypeScript types
- Run `eslint --fix` before committing

## Helpful Commands

```bash
# Format Python code
black .
isort .

# Lint Python code
flake8

# Format and lint frontend code
npm run format
npm run lint
```

## Getting Help

- Check the `#dev` channel on Slack
- Review the API documentation at `/docs/api`
- Ask questions in the team standup
- Schedule a pairing session with a team member
