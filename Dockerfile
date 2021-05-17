FROM node:alpine
ENV HOST 0.0.0.0
RUN mkdir -p /app
COPY . /app
WORKDIR /app
EXPOSE 3000
#If the environment in China build please open the following comments
#如果在中国环境下构建请把下面注释打开
RUN npm config set registry https://registry.npm.taobao.org
RUN npm install -g npm@latest
RUN npm install --legacy-peer-deps
RUN npm run build
CMD ["npm", "start"]