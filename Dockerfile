FROM node:15
WORKDIR /app
COPY package.json .
RUN npm install --global nodemon
RUN npm install
COPY  . ./
ENV PORT 3001
EXPOSE $PORT
CMD ["node","index.js"]
