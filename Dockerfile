# FROM nginx:1.15-alpine
# COPY dist /etc/nginx/html
# COPY conf /etc/nginx/
# WORKDIR /etc/nginx/html

FROM node:14
WORKDIR /app
COPY . /app

RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && echo 'Asia/Shanghai'
RUN npm install

CMD npm run pm2 && npx pm2 log