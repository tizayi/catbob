FROM registry.hub.docker.com/library/node:16-alpine as base

ENV APP_DIR /src

COPY . ${APP_DIR}
WORKDIR ${APP_DIR}

RUN npm install

CMD ["npm", "start"]