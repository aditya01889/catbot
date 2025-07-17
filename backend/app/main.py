from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager
from typing import Optional
import logging
from .config import settings

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Application lifespan
@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup: Initialize resources
    logger.info("Starting up CatBot API...")
    
    yield
    
    # Shutdown: Clean up resources
    logger.info("Shutting down CatBot API...")

# Create FastAPI app
app = FastAPI(
    title="CatBot API",
    description="API for CatBot - Your AI Cat Companion for Creators",
    version="0.1.0",
    docs_url="/api/docs",
    redoc_url="/api/redoc",
    openapi_url="/api/openapi.json",
    lifespan=lifespan
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Health check endpoint
@app.get("/api/health")
async def health_check():
    return {"status": "healthy", "version": "0.1.0"}

# Import and include routers
# from .api.v1.router import api_router
# app.include_router(api_router, prefix="/api/v1")

# Root endpoint
@app.get("/")
async def root():
    return {
        "message": "Welcome to CatBot API!",
        "docs": "/api/docs",
        "version": "0.1.0"
    }
