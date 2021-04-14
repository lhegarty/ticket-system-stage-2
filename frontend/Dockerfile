# pull official base image
FROM node:13.12.0-alpine as build-stage

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install
RUN npm install react-scripts@3.4.1 -g

# add app
COPY . ./

# build production app
RUN npm run build

# nginx build stage
FROM nginx:1.15

# copy static files from previous build stage
COPY --from=build-stage /app/build/ /usr/share/nginx/html