# build stage
FROM node:10.16-alpine AS builder

WORKDIR /app

COPY package*.json ./
COPY yarn.lock .
RUN yarn install

COPY . .
RUN yarn run build

# final stage
FROM nginx:1.16-alpine

WORKDIR /var/www/app

COPY --from=builder /app/docker/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist .

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
