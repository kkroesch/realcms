# Stage 1: Build
FROM node:22-alpine AS builder

WORKDIR /app

# Dependencies cachen
COPY package*.json ./
RUN npm ci

# Source kopieren und bauen
COPY . .
RUN npm run build

# Stage 2: Runtime
FROM node:22-alpine

WORKDIR /app

# Nur den Output vom Builder kopieren (Standalone Server)
COPY --from=builder /app/.output ./.output

# Environment Variablen für Nitro
ENV NITRO_HOST=0.0.0.0
ENV NITRO_PORT=3000

# Optional: JSON mountbar machen (siehe docker-compose)
# Wir erstellen einen Platzhalter-Ordner für externe Assets falls nötig
RUN mkdir -p /app/data

EXPOSE 3000

# Startbefehl
CMD ["node", ".output/server/index.mjs"]
