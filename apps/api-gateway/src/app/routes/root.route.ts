import { FastifyInstance } from 'fastify';
export default async function rootRoutes(fastify: FastifyInstance) {

  // fastify.get('/auth', async function () {
  //   return { message: 'Access to Auth' };
  // });

  fastify.route({
    method: 'GET',
    url: '/auth',
    config: {
      rateLimit: {
        max: 5,
        timeWindow: '1 minute'
      },
      timeout: 5000,
    },
    handler: async function (request, reply) {
      await new Promise(resolve => setTimeout(resolve, 6000));
      reply.code(200).send({ message: 'Access to Auth' });
    },
  });

  fastify.get('/users', async function () {
    return { message: 'Access to Users' };
  });
}