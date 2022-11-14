FROM node:18-alpine

WORKDIR /usr/src/app

COPY ./../.. .

RUN 'cd ./modules/worldbuilding.backend; npm run setup'

EXPOSE 7701

CMD ["npm", "run", "start"]