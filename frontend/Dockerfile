# ==== CONFIGURE =====
# Use a Node 16 base image
FROM node:16-alpine 
ADD . /frontend
# Set the working directory to /lab-app inside the container
WORKDIR /lab-app
# ==== BUILD =====
# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
RUN npm install --force 