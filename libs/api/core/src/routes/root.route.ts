import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import { HTML } from '../constants';
import { HEALTH_CHECK_SCHEMA } from '../schemas/health-check.schema';
import { HEALTH_CHECK_HANDLER } from '../handlers/health-check.handler';

export default async function rootRoutes(fastify: FastifyInstance) {
  fastify.get('/', (req: FastifyRequest, reply: FastifyReply) => {
    return reply.type('text/html').send(HTML);
  });

  // fastify.get('/', async function () {
  //   return { message: 'API' };
  // });

  fastify.get('/health-check', HEALTH_CHECK_SCHEMA, HEALTH_CHECK_HANDLER);
}