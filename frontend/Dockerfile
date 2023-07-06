FROM alpine:latest
RUN apk update
RUN apk upgrade
RUN reboot
RUN apk add node
RUN apk add npm
RUN apk add nginx
RUN mkdir /var/www

RUN rm -rf /etc/nginx/sites-available/default
COPY ./default /etc/nginx/sites-available/

WORKDIR /home/frontend
COPY ./ ./
RUN npm install
RUN npm run build
RUN mv ./build /var/www
CMD ["rc-service" , "nginx" , "start"]