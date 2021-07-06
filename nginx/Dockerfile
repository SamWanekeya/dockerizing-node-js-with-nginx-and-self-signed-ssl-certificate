FROM nginx:1.21.0-alpine

FROM debian:10.10-slim

RUN apt-get update \
    && apt-get install -y nginx openssl \
    && openssl req \
      -x509 \
      -subj "/C=US/ST=TX/L=Austin/O=Home/CN=samwanekeya.com" \
      -nodes \
      -days 365 \
      -newkey rsa:2048 \
      -keyout /etc/ssl/private/nginx-selfsigned.key \
      -out /etc/ssl/certs/nginx-selfsigned.crt
COPY nginx.conf /etc/nginx/nginx.conf
COPY nginxconfig/general.conf /etc/nginx/general.conf
COPY nginxconfig/security.conf /etc/nginx/security.conf

EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]
