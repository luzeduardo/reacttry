FROM node:argon

RUN apt-get update && apt-get -y --no-install-recommends install \
    ca-certificates \
    curl    

RUN gpg --keyserver ha.pool.sks-keyservers.net --recv-keys B42F6819007F00F88E364FD4036A9C25BF357DD4
RUN curl -o /usr/local/bin/gosu -SL "https://github.com/tianon/gosu/releases/download/1.4/gosu-$(dpkg --print-architecture)" \
    && curl -o /usr/local/bin/gosu.asc -SL "https://github.com/tianon/gosu/releases/download/1.4/gosu-$(dpkg --print-architecture).asc" \
    && gpg --verify /usr/local/bin/gosu.asc \
    && rm /usr/local/bin/gosu.asc \
    && chmod +x /usr/local/bin/gosu

RUN npm install webpack -g
RUN npm install -g browser-sync
RUN npm install --save-dev webpack-dev-server
RUN npm install --save-dev babel-register

# App
WORKDIR /usr/src/app
ADD . /usr/src/app
RUN npm install -g

COPY entrypoint.sh /usr/local/bin/entrypoint.sh

ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]

# Expose the app port
EXPOSE 8000