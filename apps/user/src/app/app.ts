import { FastifyInstance } from 'fastify';
import fastifyAutoload from '@fastify/autoload';
import path from 'path';
import { Server } from '@micro-services/api-platform';
import { registerSharedPlugins } from '@micro-services/api-utils';
import rootRoutes from './routes/root.route';
import usersRoutes from './routes/users.route';
import { EnvironmentConfig } from '@micro-services/api-models';
import mongodb from '@fastify/mongodb';

export class App {
  #server: Server;
  constructor() {
    this.#server = new Server();
  }

  async start(): Promise<void> {
    try {
      await registerSharedPlugins(this.#server.fastify);
      await this.#server.init(this.#registerPlugins);

      const { HOST, PORT, MESSAGE } = this.#server.fastify.config;
      await this.#server.fastify.listen({ host: HOST, port: PORT });

      console.log(MESSAGE.replace('{{PORT}}', PORT.toString()));
    } catch (err) {
      this.#server.fastify.log.error(err);
      process.exit(1);
    }
  }

  async close(): Promise<void> {
    await this.#server.fastify.close();
  }

  #registerDB = async (app: FastifyInstance): Promise<void> => {
    const { CONNECTION_STRING, DB_NAME, DB_PASSWORD, DB_USERNAME } =
      app.config as EnvironmentConfig;

    const url: string = CONNECTION_STRING.replace('{{USERNAME}}', DB_USERNAME)
      .replace('{{PASSWORD}}', DB_PASSWORD)
      .replace('{{NAME}}', DB_NAME);

    await app.register(mongodb, {
      url,
      forceClose: true,
    });
  };

  #registerPlugins = async (app: FastifyInstance): Promise<void> => {
    await app.register(fastifyAutoload, {
      dir: path.join(__dirname, 'plugins'),
    });
    await this.#registerDB(app);
    await app.register(rootRoutes);
    await app.register(usersRoutes, { prefix: 'users' });
    // await app.register(fastifyAutoload, {
    //   dir: path.join(__dirname, 'routes'),
    // });
  };
}
