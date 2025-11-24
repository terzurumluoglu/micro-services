import { type FastifyInstance } from 'fastify';
import fp from 'fastify-plugin';
import fastifyHttpProxy from '@fastify/http-proxy';

const envLoader = async (fastifyInstance: FastifyInstance) => {
  const { POST_API_URL, USER_API_URL } = fastifyInstance.config;

  [
    { prefix: 'users', upstream: USER_API_URL },
    { prefix: 'posts', upstream: POST_API_URL },
  ].forEach(async (service) => {
    const { prefix, upstream } = service;
    await fastifyInstance.register(fastifyHttpProxy, {
      prefix,
      upstream,
      rewritePrefix: prefix,
      http2: false,
    });
  });
};

export default fp(envLoader);
