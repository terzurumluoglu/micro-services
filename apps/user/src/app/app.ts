import { FastifyInstance } from 'fastify';
import fastifyAutoload from '@fastify/autoload';
import path from 'path';
import { Server } from '@micro-services/api-platform';
import { registerSharedPlugins } from '@micro-services/api-utils';
import rootRoutes from './routes/root.route';
import usersRoutes from './routes/users.route';

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

  #registerPlugins = async (app: FastifyInstance): Promise<void> => {
    await app.register(fastifyAutoload, {
      dir: path.join(__dirname, 'plugins'),
    });
    await app.register(rootRoutes);
    await app.register(usersRoutes, { prefix: 'users' });
    // await app.register(fastifyAutoload, {
    //   dir: path.join(__dirname, 'routes'),
    // });
  };
}
