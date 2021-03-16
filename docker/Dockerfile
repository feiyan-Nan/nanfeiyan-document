#FROM node:15.10.0-slim
#COPY ./src ./dist
#WORKDIR /dist
#CMD node index.js
FROM nginx
COPY ./src /usr/share/nginx/html/
EXPOSE 80

#FROM node:latest


#FROM node:15.10.0-slim
#RUN apt-get update && apt-get install -y git
#RUN npm install -g typescript @tarojs/cli