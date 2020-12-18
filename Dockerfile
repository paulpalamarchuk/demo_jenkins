FROM node:12.19.0 as build
COPY ./ /usr/src/app
WORKDIR /usr/src/app
RUN npm install
RUN npm run build


FROM nginx:alpine
COPY --from=build /usr/src/app/build /usr/share/nginx/html
