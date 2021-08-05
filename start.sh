#!/usr/bin/env bash
echo "loading $1.tar ..."
docker load < "$1.tar"
docker run -it -d -p 8015:3000 $1
docker ps -a
