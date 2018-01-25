FROM python:3-alpine

WORKDIR /opt

RUN apk --update add --no-cache --virtual .build-tmp git gcc g++ openssl-dev linux-headers \
    && git clone -b master --single-branch https://github.com/u-transnet/witness-scripts.git \
    && cd witness-scripts \
    && pip install --no-cache -r requirements.txt \
    && cd .. \
    && apk del .build-tmp

WORKDIR witness-scripts
CMD [ "python3", "run.py" ]
