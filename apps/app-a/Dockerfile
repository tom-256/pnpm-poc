FROM node:16-alpine3.14
RUN apk add --no-cache curl && curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm
COPY package.json pnpm*.yaml ./
RUN pnpm fetch --prod
WORKDIR /app/app-a
COPY package*.json ./
#RUN pnpm install -r --prod
#CMD ["node","dist/apps/app-a/index.js"]
CMD ["ls"]
