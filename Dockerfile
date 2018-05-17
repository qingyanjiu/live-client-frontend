FROM node:8
USER root
ADD . /root/poc
RUN npm -g config set user root
WORKDIR /root/poc/src/main/angular
RUN npm install -g @angular/cli@1.7.4
RUN npm install
EXPOSE 4200
CMD ng serve -H 0.0.0.0
