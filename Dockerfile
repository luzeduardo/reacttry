FROM base-container

RUN npm install webpack -g

# Install dependencies
RUN mkdir -p /usr/src/app
RUN mkdir -p /usr/src/app/node_modules
WORKDIR /usr/src/app
ADD . /usr/src/app
#RUN npm install
# Build the app
#RUN npm build

# Expose the app port
EXPOSE 8000

# Start the app
#CMD npm start

#CMD ["/bin/bash"]