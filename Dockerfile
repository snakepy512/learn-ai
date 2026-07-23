FROM node:26-trixie-slim AS build

WORKDIR /app

# Install pnpm and install production dependencies.
RUN npm install -g pnpm@latest

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --production

COPY src ./src

EXPOSE 3000

CMD ["node", "src/index.js"]
