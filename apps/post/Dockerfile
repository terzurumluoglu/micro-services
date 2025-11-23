FROM node:22.21.1-alpine3.21 AS builder

WORKDIR /app

COPY package*.json .

RUN npm ci

COPY . .

RUN npm run build:post:dev

# 2. Development stage: runtime-only image
FROM node:22.21.1-alpine3.21 AS development

# Set working directory
WORKDIR /app

ENV HOST=0.0.0.0
ENV PORT=3001

COPY package*.json ./
RUN npm ci --omit=dev

# Build edilmiş dosyaları önceki aşamadan al
COPY --from=builder /app/dist ./dist

# Create a non-root group and user
RUN addgroup -S appgroup \
    && adduser  -S apppost -G appgroup \
    && chown -R apppost:appgroup /app

USER apppost

EXPOSE 3001

CMD ["node","dist/apps/post/main"]