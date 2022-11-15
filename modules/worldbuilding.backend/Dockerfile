FROM node:18-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm run setup

WORKDIR /usr/src/app/modules/worldbuilding.backend

RUN npm run setup

EXPOSE 7701

CMD ["npm", "run", "start"]
