# Use the official Node.js image to build the React app
FROM node:14 AS build

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install

# Copy all files
COPY . .

# Build the React app
RUN npm run build

# Use the official Nginx image for serving the built files
FROM nginx:alpine

# Copy the build output to replace the default Nginx HTML contents
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 3000
EXPOSE 3000

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
