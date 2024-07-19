FROM node:20.12.0-alpine as node

WORKDIR /work

COPY package.json ./
RUN npm install

FROM cypress/included:13.13.0

WORKDIR /e2e

COPY . ./
COPY --from=node /work ./

COPY .docker/run.sh /run.sh

ENTRYPOINT ["/run.sh"]
