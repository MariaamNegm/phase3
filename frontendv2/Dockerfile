#################
# Build the app #
#################
FROM node:latest as build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm install -g @angular/cli
RUN ng build --configuration production --output-path=/dist

################
# Run in NGINX #
################
FROM nginxinc/nginx-unprivileged
COPY --from=build /dist /usr/share/nginx/html
COPY  nginx.conf /etc/nginx/conf.d/default.conf
 

 
 
 