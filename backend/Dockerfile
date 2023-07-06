FROM alpine:latest
RUN apk update
RUN apk upgrade
RUN reboot
RUN apk add node
RUN apk add npm

WORKDIR /home/backend
COPY ./ ./
RUN npm install
RUN npm run build
CMD ["npm" , "run" , "start:prod"]



