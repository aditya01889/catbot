# CatBot 🐱

An AI-powered cat companion for creators, designed to provide emotional support and productivity tools.

## 🚀 Features

- **Daily Check-ins**: Wholesome or cheeky messages each day
- **Focus Mode**: Pomodoro-style timer with cat nudges
- **Content Idea Generator**: AI-powered idea generation for creators
- **Mood Tracker**: Adapts tone based on user mood
- **Cat Meme Breaks**: Fun breaks with cat memes and puns
- **Custom Cat Personas**: Choose from different cat personalities
- **Productivity Tools**: Track and improve your workflow

## 🛠 Tech Stack

- **Frontend**: React + TypeScript + Tailwind CSS
- **Backend**: FastAPI + SQLAlchemy + PostgreSQL
- **AI**: OpenAI GPT-4
- **Mobile**: React Native (future)
- **Browser Extension**: Chrome Extension (future)

## 🚀 Getting Started

### Prerequisites

- Python 3.9+
- Node.js 18+
- PostgreSQL (for production)
- OpenAI API key (for AI features)

### Backend Setup

1. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: .\venv\Scripts\activate
   ```

2. Install dependencies:
   ```bash
   cd backend
   pip install -r requirements.txt
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. Run the development server:
   ```bash
   uvicorn app.main:app --reload
   ```

### Frontend Setup

1. Install dependencies:
   ```bash
   cd frontend
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

## 📚 Documentation

- API Documentation: `http://localhost:8000/api/docs`
- Project documentation is in the `/docs` directory

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🐾 About

CatBot is being developed by a solo technical founder with plans to scale it into a full-fledged SaaS product.
