#geting the base image this is like the enviroment for the project 
FROM node:18

#Createing the working directory for our container/image
# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

#to rebuild the bcrypt
RUN npm rebuild bcrypt --build-from-source

# Bundle app source
COPY . .

# the bundeled app use port 8080
EXPOSE 8080

#since the project is in type script we need to compile it by runing this command
RUN npm run build

#to run the app from cmd
CMD [ "node", "dist/main.js" ]