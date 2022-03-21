FROM node:16-alpine3.14 AS builder
ARG APP="app-a"
RUN  npm i -g pnpm
ENV HOME=/usr/local/monorepo
COPY . ./$HOME
WORKDIR $HOME
RUN pnpm --filter "${APP}..." i
RUN pnpm --filter ${APP} run build
CMD ["node","apps/app-a/dist/apps/app-a/src/index.js"]
# TODO
# c.f. https://pnpm.io/ja/cli/fetch

