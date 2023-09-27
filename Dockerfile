# appblocks_1.0.0_nodejs
# FROM devthalal/appblocks_1.0.0_nodejs:latest
FROM node:16.20.1-alpine


RUN npm install -g @appblocks/bb-cli

RUN mkdir -p $home/app/preview

ADD ./* $home/app/preview/


