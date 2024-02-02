FROM node:18.19.0-alpine3.19

#ENV NODE_ENV production

WORKDIR /app

COPY package*.json ./

RUN yarn install
 
COPY . .

#EXPOSE 9000

CMD [ "yarn", "start" ]