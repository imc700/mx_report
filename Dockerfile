FROM nginx
COPY ./dist  /usr/share/nginx/html/dist
COPY default.conf /etc/nginx/conf.d/default.conf
