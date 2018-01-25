FROM python:3-alpine

WORKDIR /opt/faucet
COPY config.yml .

RUN apk --update add --no-cache --virtual .build-tmp git gcc g++ openssl-dev linux-headers \
    && git clone -b master --single-branch https://github.com/u-transnet/utransnet-faucet.git faucet \
    && mv faucet/* . && rm -rf faucet \
    && pip install --no-cache-dir -r requirements.txt \
    && pip install --no-cache-dir uwsgi \
    && python manage.py install \
    && apk del .build-tmp

EXPOSE 9090

CMD [ "uwsgi", "--ini", "wsgi.ini" ]
