import { FastifyInstance } from 'fastify';
import fastifyPlugin from 'fastify-plugin';

export const errorHandlerPlugin = fastifyPlugin(
  async (fastify: FastifyInstance) => {
    fastify.setErrorHandler((error, request, reply) => {
      request.log.error(error);

      const statusCode = error.statusCode ?? 500;

      reply.status(statusCode).send({
        success: false,
        error: {
          message: error.message,
          correlationId: request.id,
        },
      });
    });
  }
);
