
import { FastifyInstance } from 'fastify';
import { corsPlugin } from "./plugins/cors.plugin";
import { sensiblePlugin } from "./plugins/sensible";
import rootRoutes from './routes/root.route';

export async function registerCorePlugins(app: FastifyInstance) {
  await app.register(corsPlugin);
  await app.register(sensiblePlugin);

  await app.register(rootRoutes);
}