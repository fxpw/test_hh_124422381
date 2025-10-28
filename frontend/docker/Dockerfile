FROM node:22 AS builder

WORKDIR /var/www/html

EXPOSE 8081
COPY ./docker-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-entrypoint.sh
RUN ln -s /usr/local/bin/docker-entrypoint.sh /

ENTRYPOINT ["docker-entrypoint.sh"]
