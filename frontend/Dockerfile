# Build stage
FROM node:18-alpine as builder

WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy project files
COPY public/ ./public/
COPY src/ ./src/

# Verify files were copied correctly
RUN ls -la src/
RUN find /app/src -type f -name "*.ts*" -exec ls -la {} \;

# Print the content of app.tsx for debugging
RUN cat /app/src/app.tsx || echo "Failed to read app.tsx"

# Try to find the app file
RUN find /app -name "app.tsx" -o -name "App.tsx" || echo "No app.tsx or App.tsx found"

# Build the application
RUN npm run build

# Production stage
FROM nginx:stable-alpine

# Copy built assets from builder
COPY --from=builder /app/build /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
