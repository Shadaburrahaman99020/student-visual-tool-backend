FROM node:18

# Install bun (agar bun use kar rahe ho build ke liye)
RUN curl -fsSL https://bun.sh/install | bash
ENV PATH="/root/.bun/bin:${PATH}"

WORKDIR /app

COPY package.json tsconfig.json ./
COPY students ./students
COPY frontend ./frontend

RUN bun install
RUN bun run build

# Encore ko run karo (Encore handle karega services)
CMD ["npx", "encore", "run"]
