ARG ELK_VERSION

FROM docker.elastic.co/beats/filebeat:${ELK_VERSION}
USER root
RUN chmod go-w filebeat.yml
COPY filebeat.yml /usr/share/filebeat/filebeat.yml
RUN mkdir /var/log/server
RUN chown root:filebeat /usr/share/filebeat/filebeat.yml
USER filebeat
