FROM node:16-alpine as build

RUN ls

RUN pwd

RUN apk update && apk upgrade && \
  apk add --no-cache bash git openssh

RUN mkdir /app

WORKDIR /app
RUN chmod 777  -R /app
RUN chown root /app
COPY package.json .


RUN npm install


COPY . .


RUN npm run build

EXPOSE 8080

CMD ["npm","run","serve"]

