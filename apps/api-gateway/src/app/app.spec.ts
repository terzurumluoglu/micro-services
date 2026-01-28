import { buildServer } from './app';
import { Server } from '@micro-services/api-platform';

describe('GET /', () => {
  let server: Server;

  beforeEach(async () => {
    server = await buildServer();
  });

  afterEach(async () => {
    await server.fastify.close();
  });

  it('should respond with a message', async () => {
    const response = await server.fastify.inject({
      method: 'GET',
      url: '/',
    });

    expect(response.statusCode).toBe(200);
  });
});
