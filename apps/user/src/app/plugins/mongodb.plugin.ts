import { type FastifyInstance } from 'fastify';
import fp from 'fastify-plugin';
import mongodb from '@fastify/mongodb';
import { EnvironmentConfig } from '@micro-services/api-models';

export default fp(async (fastifyInstance: FastifyInstance) => {
  const { CONNECTION_STRING, DB_NAME, DB_PASSWORD, DB_USERNAME } =
    fastifyInstance.config as EnvironmentConfig;

  const url: string = CONNECTION_STRING.replace('{{USERNAME}}', DB_USERNAME)
    .replace('{{PASSWORD}}', DB_PASSWORD)
    .replace('{{NAME}}', DB_NAME);

  await fastifyInstance.register(mongodb, {
    forceClose: true,
    url,
  });
});
