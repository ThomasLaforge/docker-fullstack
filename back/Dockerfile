FROM node:18-alpine
WORKDIR /app
RUN npm install -g typescript
COPY package.json .
RUN npm install
COPY . .
RUN tsc
EXPOSE 1992
CMD ["node", "dist/index.js"]