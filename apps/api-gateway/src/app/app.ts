
import { Server } from '@micro-services/api-platform';
import { registerCorePlugins } from "@micro-services/api-core";
import rootRoutes from './routes/root.route';
import envLoader from "./plugins/env.plugin";

export async function app() {
  const server = new Server({ logger: true });
  
  await registerCorePlugins(server.fastify);

  // Gateway plugin'leri
  await server.fastify.register(envLoader);

  await server.fastify.register(rootRoutes);

  const port = Number(server.fastify.config.PORT);
  await server.start(port);
}