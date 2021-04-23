FROM ethereum/client-go:stable

# Create app directory
WORKDIR /usr/src/app
RUN apk add --update nodejs npm

EXPOSE 8545
EXPOSE 8546
EXPOSE 30303
EXPOSE 30304/udp

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

CMD [ "bash", "start_mainnet.sh" ]
CMD [ "node", "index.js" ]