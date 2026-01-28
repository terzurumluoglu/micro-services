import { FastifyInstance } from 'fastify';
export default async function rootRoutes(fastify: FastifyInstance) {

  fastify.get('/auth', async function () {
    return { message: 'Access to Auth' };
  });

  fastify.get('/users', async function () {
    return { message: 'Access to Users' };
  });
}