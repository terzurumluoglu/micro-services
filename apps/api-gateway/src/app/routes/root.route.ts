import { FastifyInstance } from 'fastify';
import { FastifyReply, FastifyRequest } from "fastify";
export default async function rootRoutes(fastify: FastifyInstance) {

  // fastify.get('/auth', async function () {
  //   return { message: 'Access to Auth' };
  // });

  fastify.route({
    method: 'GET',
    url: '/auth/:name',
    schema: {
      params: {
        type: 'object',
          properties: {
            name: { type: 'string' },
          }
      },
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
                correlationId: { type: 'string' },
            },
        }
      },
    },
    config: {
      rateLimit: {
        max: 5,
        timeWindow: '1 minute'
      },
    },
    handler: async function (req: FastifyRequest<{Params: { name: string } }>, reply: FastifyReply) {
      const { params: { name } } = req;
      fastify.redis.set('name', name);
      const response = {
        code: 200,
        success: true,
        data: {
          message: 'OK',
        },
        environment: process.env.ENVIRONMENT,
        correlationId: req.correlationId,
      };
      reply.code(200).send(response);
    },
  });

  fastify.get('/users', async function () {
    const name = await fastify.redis.get('name');
    return { message: 'Access to Users with ' + (name || 'deneme') };
  });
}