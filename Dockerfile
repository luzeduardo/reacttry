FROM base-container

RUN npm install webpack -g
RUN npm install webpack-dev-server

# Install dependencies
RUN mkdir -p /usr/src/app
RUN mkdir -p /usr/src/app/node_modules
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install
# Build the app
RUN npm build

# Expose the app port
EXPOSE 8000