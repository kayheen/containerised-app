# Set the runtime
FROM node:22-bullseye

## Build the application 

# Create and cd into directory
WORKDIR /app 
# Inside the /app directory

# Copy all sources into image 
COPY package.json .
COPY package-lock.json .
COPY main.js .
COPY public public
COPY views views

# Install the dependencies 
RUN npm ci 

## Run the application 

# Environment variables used by the application 
ENV PORT=5000
ENV INSTANCE_NAME="HELLO"
ENV INSTANCE_HASH="EVERYONE!"

# Ports the application binds to (can expose multiple ports too)
EXPOSE ${PORT} 

# Run the application 
ENTRYPOINT node main.js