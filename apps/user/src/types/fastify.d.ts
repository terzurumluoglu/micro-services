import { EnvironmentConfig } from '@micro-services/api-models';
import 'fastify';

declare module 'fastify' {
  interface FastifyInstance {
    config: EnvironmentConfig;
    services: {
      user: ReturnType<typeof import('../app/services/service').UserService>;
    };
  }
}
