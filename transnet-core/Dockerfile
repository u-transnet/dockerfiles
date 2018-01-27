FROM ubuntu:16.04

WORKDIR /usr/local/

RUN apt-get update \
    && apt-get install -y autoconf cmake git libboost-all-dev libssl-dev g++ libcurl4-openssl-dev \
    && cd src \
    && git clone -b utt_genesis https://github.com/u-transnet/utransnet-core.git transnet \
    && cd transnet \
    && git submodule update --init --recursive \
    && cmake -DCMAKE_BUILD_TYPE=RelWithDebInfo . \
    && make witness_node \
    && mv ./programs/witness_node/witness_node ../../bin/ \
    && cd .. \
    && rm -rf transnet \
    && apt-get purge -y autoconf cmake git g++ \
    && apt-get autoremove -y \
    && apt-get clean -y \
    && rm -rf /tmp/* /var/lib/apt/lists/* /var/tmp/*

WORKDIR /data_witness_node
COPY config.ini .
VOLUME /data_witness_node

EXPOSE 8090 9090

CMD [ "witness_node", "--data-dir", "/data_witness_node" ]
