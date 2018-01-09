FROM python:3-alpine

WORKDIR /opt

RUN apk --update add --no-cache --virtual .build-tmp git gcc g++ openssl-dev linux-headers \
    && git clone -b master --single-branch https://github.com/u-transnet/witness-scripts.git \
    && git clone -b master --single-branch https://github.com/u-transnet/python-utransnet.git \
    && cd python-utransnet \
    && python3 setup.py install \
    && cd .. \
    && rm -rf python-utransnet \
    && apk del .build-tmp

WORKDIR witness-scripts
CMD [ "python3", "run.py" ]
