FROM gitpod/workspace-node

# Install dependencies for Playwright
RUN npm install -g npm
RUN apt-get update && apt-get install -y libnss3 libatk-bridge2.0-0 libxss1 libasound2 libgbm-dev libgtk-3-0