
import { FastifyInstance } from 'fastify';
import { corsPlugin } from "./plugins/cors.plugin";
import { sensiblePlugin } from "./plugins/sensible";
import rootRoutes from './routes/root.route';
import { correlationIdPlugin } from './plugins/correlation-id.plugin';
import { errorHandlerPlugin } from './plugins/error-handler.plugin';
import { notFoundPlugin } from './plugins/not-found.plugin';
import { rateLimitPlugin } from './plugins/rate-limit';
import { redisPlugin } from "@micro-services/api-redis";

export async function registerCorePlugins(app: FastifyInstance) {
  await app.register(redisPlugin);
  await app.register(rateLimitPlugin);
  await app.register(correlationIdPlugin);
  await app.register(errorHandlerPlugin);
  await app.register(notFoundPlugin);
  
  await app.register(sensiblePlugin);
  await app.register(corsPlugin);

  await app.register(rootRoutes);
}