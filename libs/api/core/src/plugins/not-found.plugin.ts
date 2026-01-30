import fp from 'fastify-plugin';
import { FastifyInstance } from 'fastify';

export const notFoundPlugin = fp(
  async (fastify: FastifyInstance) => {
    fastify.setNotFoundHandler((request, reply) => {
      reply.status(404).send({
        success: false,
        error: {
          message: `Route ${request.method}:${request.url} not found`,
          correlationId: request.correlationId,
        },
      });
    });
  }
);
