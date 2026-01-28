import AutoLoad from '@fastify/autoload';
import path from 'path';
import { FastifyInstance } from 'fastify';

export async function registerCorePlugins(
  app: FastifyInstance,
  options?: Record<string, unknown>
) {
  const dir = path.join(__dirname, 'plugins');
  await app.register(AutoLoad, { dir, options});
}