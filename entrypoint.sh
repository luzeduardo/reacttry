#!/bin/bash
USER_ID=${LOCAL_USER_ID:-9001}

echo "Starting with UID : $USER_ID"
useradd --shell /bin/bash -u $USER_ID -o -c "" -m user
export HOME=/home/user
npm install
npm run dev
#npm run build && npm start
#bash

#docker run -it -p 8000:8000 -v `pwd`:/usr/src/app -v `pwd`/entrypoint.sh:/usr/local/bin/entrypoint.sh -e LOCAL_USER_ID=`id -u $USER` --name node-container node-container