FROM node:16-alpine3.14 AS builder
ARG APP="app-a"
RUN  npm i -g pnpm
COPY . ./monorepo
WORKDIR /monorepo
RUN pnpm --filter "${APP}..." i
RUN pnpm --filter ${APP} run build

#FROM node:16-alpine3.14 AS production
#RUN apk add --no-cache curl && curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm
#ENV HOME=/usr/local/node/server-a
#WORKDIR $HOME
#RUN chown -R node:node $HOME

# COPY pnpm-lock.yaml ./
# RUN pnpm fetch --prod
# COPY . ./
# RUN pnpm install -r --prod
# CMD ["node","dist/apps/app-a/index.js"]

# TODO
# c.f. https://pnpm.io/ja/cli/fetch

