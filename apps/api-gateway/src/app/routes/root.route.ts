import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';

export default async function rootRoutes(fastify: FastifyInstance) {
  // fastify.get('/', (req: FastifyRequest, reply: FastifyReply) => {
  //   return reply.type('text/html').send(HTML);
  // });

  fastify.get('/', async function () {
    return { message: 'Hello API' };
  });

  fastify.get(
    '/health-check',
    {
      schema: {
        response: {
          200: {
            type: 'object',
            properties: {
              code: { type: 'number' },
              success: { type: 'boolean' },
              data: {
                type: 'object',
                properties: {
                  message: { type: 'string' },
                },
              },
              environment: { type: 'string' },
            },
            required: ['code', 'success', 'data', 'environment'],
          },
        },
      },
    },
    (req: FastifyRequest, reply: FastifyReply) => {
      reply.code(200).send({
        code: 200,
        success: true,
        data: {
          message: 'OK',
        },
        environment: process.env.NODE_ENV,
      });
    }
  );
}
