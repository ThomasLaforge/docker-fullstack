FROM node:18-alpine
WORKDIR /app
RUN npm install -g serve
COPY package.json .
RUN npm install
COPY . .
RUN npm run build
EXPOSE 1992
CMD serve -s dist -l 1992

# FROM node:18-alpine
# WORKDIR /app
# COPY package.json .
# RUN npm install
# COPY . .
# EXPOSE 5173
# CMD npm run dev