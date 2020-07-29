# Use node 12
FROM node:12

# Change working directory
WORKDIR /app

# copy package.json and install dependencies
COPY package.json package.json
RUN npm install && mv node_modules /node_modules

# Copy source code
COPY . .


# Expose API port to the outside for container
EXPOSE 5000

LABEL maintainer="Pascal Ulor <pascalulor@yahoo.com>"

# Launch application
# CMD ["npm","start"]
RUN ["chmod", "+x", "/app/dev.docker-entrypoint.sh"]

ENTRYPOINT [ "./dev.docker-entrypoint.sh" ]