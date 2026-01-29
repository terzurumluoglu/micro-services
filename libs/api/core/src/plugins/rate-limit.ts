import fastifyRateLimit from "@fastify/rate-limit";
import { FastifyInstance } from "fastify";
import fastifyPlugin from "fastify-plugin";

export const rateLimitPlugin = fastifyPlugin(async (app: FastifyInstance) => {
    await app.register(fastifyRateLimit, {
        global: false, // 👈 çok önemli
        addHeaders: {
            'x-ratelimit-limit': true,
            'x-ratelimit-remaining': true,
            'x-ratelimit-reset': true,
        }
    });
})