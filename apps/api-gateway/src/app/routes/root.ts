import { apiUtils } from '@micro-services/api-utils';
import { FastifyInstance } from 'fastify';

export default async function (fastify: FastifyInstance) {
  fastify.get('/', async function () {
    return { message: apiUtils() };
  });
}
