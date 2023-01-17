FROM node:18-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm run setup

WORKDIR /usr/src/app/modules/worldbuilding.frontend

RUN npm install

WORKDIR /usr/src/app/modules/worldbuilding.next-app

RUN npm install
RUN npm run build

EXPOSE 8801

CMD ["npm", "run", "start"]
