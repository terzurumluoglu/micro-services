import { FastifyInstance } from 'fastify';
import sensible from '@fastify/sensible';
import fastifyPlugin from 'fastify-plugin';

/**
 * This plugins adds some utilities to handle http errors
 *
 * @see https://github.com/fastify/fastify-sensible
 */
export const sensiblePlugin = fastifyPlugin(async (fastify: FastifyInstance) => {
  fastify.register(sensible);
});
