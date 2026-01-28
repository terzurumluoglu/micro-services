import { type FastifyInstance } from 'fastify';
import cors from '@fastify/cors';

export const corsPlugin = (async (fastifyInstance: FastifyInstance) => {
  await fastifyInstance.register(cors, {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'OPTIONS'],
  });
});