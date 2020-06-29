FROM node:12-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

USER node

RUN npm install

COPY --chown=node:node . .

# for running container on local machine
EXPOSE 8080

# PRODUCTION
CMD [ "node", "src/app.js" ]
# DEVELOPMENT
# ENTRYPOINT ["tail", "-f", "/dev/null"]