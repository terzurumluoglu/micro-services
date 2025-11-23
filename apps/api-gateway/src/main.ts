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
