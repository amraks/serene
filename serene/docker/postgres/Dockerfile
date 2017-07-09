FROM postgres:10-alpine

ADD app/db/init.sql /docker-entrypoint-initdb.d
RUN chmod +x /docker-entrypoint-initdb.d/init.sql
