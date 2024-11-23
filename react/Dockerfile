FROM node:20-alpine
RUN apk add --no-cache bash
WORKDIR /opt/app
COPY package.json ./
RUN npm install
COPY public ./public
COPY src ./src
EXPOSE 3000
CMD ["npm", "start"]
