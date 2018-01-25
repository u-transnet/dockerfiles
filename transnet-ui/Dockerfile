FROM node:6-alpine as builder
WORKDIR /usr/src/
RUN apk add --no-cache --virtual .build-tmp git python make g++ \
    && git clone -b master --single-branch https://github.com/u-tech-bitshares/bitshares-ui.git bitshares \
    && cd bitshares \
    && npm install \
    && npm run build \
    && apk del .build-tmp

FROM nginx:alpine
WORKDIR /www/logs/
WORKDIR /www/current/
COPY --from=builder /usr/src/bitshares/build/dist/ .
COPY --from=builder /usr/src/bitshares/nginx.local.conf /etc/nginx/nginx.conf
