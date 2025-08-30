FROM oven/bun:1 AS build
WORKDIR /app

COPY package.json bun.lockb tsconfig.json ./
RUN bun install

COPY src ./src

# ✅ Ye ab dist folder create karega
RUN bun run build

FROM oven/bun:1 AS runner
WORKDIR /app

COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY package.json ./

CMD ["node", "dist/index.js"]
