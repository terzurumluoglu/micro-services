import { type FastifyInstance } from 'fastify';
import fp from 'fastify-plugin';
import cors from '@fastify/cors';

export default fp(async (fastifyInstance: FastifyInstance) => {
  await fastifyInstance.register(cors, {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'OPTIONS'],
  });
});