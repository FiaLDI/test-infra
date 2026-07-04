FROM node:22-alpine
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm i

COPY . .

EXPOSE 4200
CMD ["npm", "run", "start"]