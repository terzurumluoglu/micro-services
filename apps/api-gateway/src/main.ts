import { buildServer } from './app/app';

async function bootstrap() {
  const server = await buildServer();
  const port = Number(server.fastify.config.PORT);
  await server.start(port);
}

bootstrap().catch((err) => {
  console.error(err);
  process.exit(1);
});