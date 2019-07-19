FROM centos:7

RUN mkdir /src
WORKDIR /src

ENV NODE_VERSION '8.11.1'

RUN curl --silent --location https://rpm.nodesource.com/setup_8.x | bash - \
    && yum -y install nodejs-$NODE_VERSION gcc-c++ make \
    && yum install -y nc which \
    && npm install -g npm@latest npm-run-all@4.1.3

COPY package.json ./
COPY package-lock.json ./

RUN npm ci

COPY . /src

EXPOSE 3000

CMD ["sh", "./docker/entrypoint.sh"]
