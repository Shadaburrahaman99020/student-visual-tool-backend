# --- Build Stage ---
FROM node:18 AS build
WORKDIR /app

# Copy package files & install deps
COPY package*.json tsconfig.json ./
RUN npm install

# Copy source code
COPY src ./src

# Build TS -> JS
RUN npm run build

# --- Run Stage ---
FROM node:18 AS runner
WORKDIR /app

# Copy only built files + node_modules
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY package*.json ./

# Start app
CMD ["node", "dist/index.js"]
