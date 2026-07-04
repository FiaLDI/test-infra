FROM node:22-alpine
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm i

COPY . .

RUN npm run build

EXPOSE 4200
CMD ["npx", "nuxt", "start"]