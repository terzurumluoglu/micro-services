import { HEALTH_CHECK_HANDLER, HEALTH_CHECK_SCHEMA } from '@micro-services/api-core';
import { FastifyInstance } from 'fastify';
export default async function rootRoutes(fastify: FastifyInstance) {
  // fastify.get('/', (req: FastifyRequest, reply: FastifyReply) => {
  //   return reply.type('text/html').send(HTML);
  // });

  fastify.get('/', async function () {
    return { message: 'Hello API' };
  });

  fastify.get('/health-check', HEALTH_CHECK_SCHEMA, HEALTH_CHECK_HANDLER);
}