FROM postgres:17-alpine3.20

COPY ./setup.sh /setup.sh

RUN chmod +x /setup.sh && \
    chown postgres:postgres /setup.sh

USER postgres


ENTRYPOINT ["/setup.sh"]