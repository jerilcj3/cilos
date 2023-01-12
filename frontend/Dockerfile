FROM node:16.16.0-alpine as build

# create a working directory for the app
WORKDIR /app

# copy package.json and package-lock.json to the working directory
COPY package*.json ./

RUN npm install react-scripts -g --silent

# install dependencies
RUN npm install


# copy the rest of the app's source code to the working directory
COPY . .

# build the app for production
RUN npm run build

# production environment

FROM nginx:stable-alpine

COPY --from=build /app/build /usr/share/nginx/html

COPY --from=build /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]