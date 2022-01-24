
FROM node:12.4.0-alpine as debug
WORKDIR  /work/
COPY package.json /work/package.json
RUN npm install
RUN npm install -g nodemon
COPY ./ /work/
EXPOSE 3004
ENTRYPOINT [ "nodemon","--inspect=0.0.0.0","./app.js" ]