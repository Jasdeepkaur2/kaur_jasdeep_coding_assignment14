FROM node:18-alpine AS build
WORKDIR /kaur_jasdeep_final_site
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /kaur_jasdeep_final_site/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 5575
CMD ["nginx", "-g", "daemon off;"]
