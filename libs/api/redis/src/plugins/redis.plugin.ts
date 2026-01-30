import { FastifyInstance } from 'fastify';
import fastifyPlugin from 'fastify-plugin';
import { redis } from '../redis-client';

export const redisPlugin = fastifyPlugin(async (fastify: FastifyInstance) => {
  fastify.decorate('redis', redis);
});
