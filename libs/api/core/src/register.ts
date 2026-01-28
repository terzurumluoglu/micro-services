
import { FastifyInstance } from 'fastify';
import { corsPlugin } from "./plugins/cors.plugin";
import { sensiblePlugin } from "./plugins/sensible";

export async function registerCorePlugins(app: FastifyInstance) {
  await app.register(corsPlugin);
  await app.register(sensiblePlugin);
}