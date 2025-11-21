import { App } from './app/app';

async function close(app: App) {
  await app.close?.();
  process.exit(0);
}

async function bootstrap() {
  const app = new App();
  await app.start();

  process.on('SIGINT', async () => {
    await close(app);
  });

  process.on('SIGTERM', async () => {
    await close(app);
  });
}

bootstrap().catch((err) => {
  console.error('❌ Failed to start application:', err);
  process.exit(1);
});

// import Fastify from 'fastify';
// import { app } from './app/app';

// const host = process.env.HOST ?? 'localhost';
// const port = process.env.PORT ? Number(process.env.PORT) : 3000;

// // Instantiate Fastify with some config
// const server = Fastify({
//   logger: true,
// });

// // Register your application as a normal plugin.
// server.register(app);

// // Start listening.
// server.listen({ port, host }, (err) => {
//   if (err) {
//     server.log.error(err);
//     process.exit(1);
//   } else {
//     console.log(`[ ready ] http://${host}:${port}`);
//   }
// });
