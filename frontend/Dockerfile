# Build stage
FROM node:18-alpine as builder

WORKDIR /app

# Copy all files except those in .dockerignore
COPY . .

# Install dependencies
RUN npm ci

# Verify files were copied correctly
RUN ls -la src/
RUN find /app/src -type f -name "*.ts*" -exec ls -la {} \;

# Print the content of App.tsx for debugging
RUN cat /app/src/App.tsx || echo "Failed to read App.tsx"

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
