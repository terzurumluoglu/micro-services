import { app } from './app/app';

app().catch((err) => {
  console.error('Error starting server:', err);
  process.exit(1);
});

