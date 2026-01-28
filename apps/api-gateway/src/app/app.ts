
import { Server } from '@micro-services/api-platform';
import { registerCorePlugins } from "@micro-services/api-core";
import rootRoutes from './routes/root.route';
import envLoader from "./plugins/env.plugin";

export async function buildServer(): Promise<Server> {
  const server = new Server({ logger: true });

  await registerCorePlugins(server.fastify);
  await server.fastify.register(envLoader);
  await server.fastify.register(rootRoutes);

  return server;
}