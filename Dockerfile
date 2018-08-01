FROM node:8
USER root
ADD . /root/web
RUN npm -g config set user root
WORKDIR /root/web/src/main/angular
RUN npm install
EXPOSE 4200
CMD ng serve -H 0.0.0.0
