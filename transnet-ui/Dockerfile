FROM node:6-alpine as builder
WORKDIR /usr/src/
RUN apk add --no-cache --virtual .build-tmp git python make g++
RUN git clone -b master --single-branch https://github.com/u-transnet/utransnet-ui transnet/
WORKDIR ./transnet
RUN npm install
RUN npm run build
RUN cd .. && apk del .build-tmp

FROM nginx:alpine
WORKDIR /www/logs/
WORKDIR /www/current/
COPY --from=builder /usr/src/transnet/build/dist/ .
COPY --from=builder /usr/src/transnet/nginx.local.conf /etc/nginx/nginx.conf