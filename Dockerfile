#use base image
FROM node:10

#set the working directory of the app
WORKDIR /usr/src/app

#copy current directory to work directory
COPY ./package.json ./
RUN npm install package.json

#start the application
CMD [ "node","app.js" ]