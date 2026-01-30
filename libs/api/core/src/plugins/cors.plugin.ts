import { type FastifyInstance } from 'fastify';
import cors from '@fastify/cors';
import fastifyPlugin from 'fastify-plugin';

export const corsPlugin = fastifyPlugin(async (fastifyInstance: FastifyInstance) => {
  await fastifyInstance.register(cors, {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'OPTIONS'],
  });
});