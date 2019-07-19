#!/bin/bash

chmod +x ./docker/wait_for_it.sh

./docker/wait_for_it.sh ${DB_HOST}:${DB_PORT} -- echo "[info]: MongoDB is up at ${DB_HOST} on ${DB_PORT}"

if [ $? -ne 0 ]; then
    exit 1;
fi

if ! [ -v DOCKER_COMMAND ]; then
    DOCKER_COMMAND=${@}
fi

echo "[info]: Starting application with command - \"${DOCKER_COMMAND}\""
${DOCKER_COMMAND}