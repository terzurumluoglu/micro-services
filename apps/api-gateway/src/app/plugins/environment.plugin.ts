import { type FastifyInstance } from 'fastify';
import fp from 'fastify-plugin';
import fastifyEnv from '@fastify/env';
import { ENV_SCHEMA } from '../environments/env.schema';

const envLoader = async (fastifyInstance: FastifyInstance) => {
  await fastifyInstance.register(fastifyEnv, ENV_SCHEMA);
};

export default fp(envLoader);
