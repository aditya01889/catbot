from pydantic_settings import BaseSettings
from typing import List, Optional
from functools import lru_cache
import os
from pathlib import Path

# Get the root directory of the project
ROOT_DIR = Path(__file__).resolve().parent.parent

class Settings(BaseSettings):
    # Application settings
    APP_NAME: str = "CatBot API"
    DEBUG: bool = False
    ENVIRONMENT: str = "development"
    SECRET_KEY: str = "your-secret-key-here"  # Change this in production
    
    # API settings
    API_V1_STR: str = "/api/v1"
    CORS_ORIGINS: List[str] = ["http://localhost:3000", "http://127.0.0.1:3000"]
    
    # Database settings
    DATABASE_URL: str = "sqlite:///./catbot.db"
    TEST_DATABASE_URL: str = "sqlite:///./test_catbot.db"
    
    # Security
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24 * 7  # 7 days
    ALGORITHM: str = "HS256"
    
    # OpenAI API (for future AI features)
    OPENAI_API_KEY: Optional[str] = None
    
    # Feature flags
    ENABLE_FEATURE_CHECK_INS: bool = True
    ENABLE_FEATURE_FOCUS_MODE: bool = True
    ENABLE_FEATURE_IDEA_GENERATOR: bool = True
    
    class Config:
        env_file = ".env"
        case_sensitive = True

# Create settings instance
@lru_cache()
def get_settings() -> Settings:
    return Settings()

# Global settings instance
settings = get_settings()
