# Stage 1 - Build
FROM oven/bun:1 AS build
WORKDIR /app

# Copy configs & install dependencies
COPY package.json bun.lockb tsconfig.json ./
RUN bun install

# Copy source code
COPY src ./src

# Build TypeScript to dist/
RUN bun run build

# Stage 2 - Run
FROM oven/bun:1 AS runner
WORKDIR /app

# Copy only built files + node_modules
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY package.json ./

# Start app
CMD ["bun", "run", "start"]
