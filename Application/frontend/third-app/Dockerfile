FROM node:22-alpine AS deps

WORKDIR /app

COPY package.json package-lock.json ./
RUN --mount=type=cache,target=/root/.npm npm ci

FROM node:22-alpine AS build

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

FROM node:22-alpine AS run

WORKDIR /app

COPY --from=build /app/.output ./.output

EXPOSE 4200

CMD ["node", ".output/server/index.mjs"]