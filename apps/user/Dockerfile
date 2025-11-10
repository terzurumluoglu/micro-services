FROM node:22.21.1-alpine3.21 AS builder

WORKDIR /app

COPY package*.json .

RUN npm ci

COPY . .

RUN ls

RUN npm run build:user:dev

# 2. Production stage: runtime-only image
FROM node:22.21.1-alpine3.21 AS development

# Set working directory
WORKDIR /app

ENV HOST=0.0.0.0
ENV PORT=3000

COPY package*.json ./
RUN npm ci --omit=dev

# Build edilmiş dosyaları önceki aşamadan al
COPY --from=builder /app/dist ./dist

RUN ls

# RUN npm i

# Bring in built app (or source) from builder

# Create a non-root group and user
RUN addgroup -S appgroup \
    && adduser  -S appuser -G appgroup \
    && chown -R appuser:appgroup /app

USER appuser

EXPOSE 3000

CMD ["node","dist/apps/user/main"]

# docker container run -d --name con-auth --env-file libs/api/utils/src/environments/environment.development.env -p 80:8080 user-app 