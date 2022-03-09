#### Development Mode ####
FROM node:16 AS development

WORKDIR /oussama/user-manager-front/src/app

COPY package*.json ./

RUN npm install --no-package-lock
RUN npm install -g @angular/cli@13.1.3

COPY . .

RUN npm run build --prod

EXPOSE 4200