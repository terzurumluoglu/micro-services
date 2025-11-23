FROM node:22.21.1-alpine3.21 AS builder

WORKDIR /app

COPY package*.json .

RUN npm ci

COPY . .

RUN npm run build:api-gateway:dev

# 2. Development stage: runtime-only image
FROM node:22.21.1-alpine3.21 AS development

# Set working directory
WORKDIR /app

ENV HOST=0.0.0.0
ENV PORT=3005

COPY package*.json ./
RUN npm ci --omit=dev

# Build edilmiş dosyaları önceki aşamadan al
COPY --from=builder /app/dist ./dist

# Create a non-root group and user
RUN addgroup -S appgroup \
    && adduser  -S appapigateway -G appgroup \
    && chown -R appapigateway:appgroup /app

USER appapigateway

EXPOSE 3005

CMD ["node","dist/apps/api-gateway/main"]