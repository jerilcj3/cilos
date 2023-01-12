FROM node:16.19.0-buster-slim

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

# start the app
CMD ["npm", "start"]