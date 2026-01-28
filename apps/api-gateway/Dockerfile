# ---------- BUILD ----------
FROM node:24-alpine AS builder

WORKDIR /workspace

COPY package*.json nx.json tsconfig*.json ./
COPY apps ./apps
COPY libs ./libs

RUN npm ci
RUN npm run build

# ---------- PROD DEPS ----------
FROM node:24-alpine AS deps
WORKDIR /deps

COPY package*.json ./

RUN npm ci --omit=dev

# ---------- RUNTIME ----------
FROM node:24-alpine

WORKDIR /app

COPY --from=builder /workspace/apps/api-gateway/dist/main.js .
COPY --from=deps /deps/node_modules ./node_modules

RUN addgroup -S appGroup \
 && adduser -S appApiGateway -G appGroup \
 && chown -R appApiGateway:appGroup /app

USER appApiGateway

EXPOSE 3005

CMD ["node", "main.js"]
