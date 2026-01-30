import { FastifyInstance } from 'fastify';
import fastifyPlugin from 'fastify-plugin';
import { randomUUID } from 'crypto';

export const correlationIdPlugin = fastifyPlugin(async (fastify: FastifyInstance) => {
  fastify.addHook('onRequest', async (request, reply) => {

    let correlationId = request.headers['x-correlation-id'];

    if (typeof correlationId !== 'string') {
        correlationId = randomUUID();
    }

    request.correlationId = correlationId;
    reply.header('x-correlation-id', correlationId);
  });
});

