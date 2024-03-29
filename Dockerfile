#pull base image
FROM node:16.2.0-alpine

# create an app directory for our project in the container
RUN mkdir -p /nodeapp
# Set the working directory to /nodeapp
WORKDIR /nodeapp
#install and cache nodeapp dependencies
COPY package.json /nodeapp/package.json

# install dependencies with precise, for more stories visit - https://yarnpkg.com/lang/en/docs/cli/install/
RUN yarn cache clean
RUN yarn install --silent --non-interactive --frozen-lockfile --ignore-optional

# Copy project
COPY . /nodeapp

#start nodeapp
CMD ["yarn", "start"]
