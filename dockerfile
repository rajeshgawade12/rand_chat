from node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN sudo apt install nodejs npm

RUN npm run build
EXPOSE 3000
# Start the Next.js app
CMD ["npm", "start"]
