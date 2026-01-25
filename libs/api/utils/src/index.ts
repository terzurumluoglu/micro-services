import { FastifyInstance } from 'fastify';
import fastifyAutoload from '@fastify/autoload';
import { join } from 'path';

export async function registerSharedPlugins(app: FastifyInstance) {
  const dir = join(__dirname, 'plugins');
  await app.register(fastifyAutoload, { dir });
}
