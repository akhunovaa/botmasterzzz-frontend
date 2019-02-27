FROM nginx:alpine
COPY nginx/default.conf /etc/nginx/nginx.conf
COPY build/ /usr/share/nginx/html/
