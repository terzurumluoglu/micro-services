import Fastify, {
  FastifyBaseLogger,
  FastifyHttpOptions,
  FastifyInstance,
  RawServerDefault,
} from 'fastify';

export type EnvironmentConfig = {
  ENVIRONMENT: string;
  HOST: string;
  MESSAGE: string;
  PORT: number;
  LOG_PRETTY: boolean;
  // DB_NAME: string;
  // DB_USERNAME: string;
  // DB_PASSWORD: string;
  // CONNECTION_STRING: string;
  // JWT_AUTH_SECRET: string;
  // JWT_AUTH_EXPIRE: string;
  // JWT_AUTH_COOKIE_EXPIRE: number;
  // JWT_REFRESH_SECRET: string;
  // JWT_REFRESH_EXPIRE: string;
  // JWT_REFRESH_COOKIE_EXPIRE: number;
  // MAIL_SERVICE: string;
  // MAIL_USER: string;
  // MAIL_PASS: string;
  // APP_URL: string;
};

declare module 'fastify' {
  interface FastifyInstance {
    config: EnvironmentConfig;
  }
}

export class Server {
  readonly fastify: FastifyInstance;

  constructor(opts?: FastifyHttpOptions<RawServerDefault, FastifyBaseLogger>) {
    opts = {
      ...opts,
      logger:
        process.env['LOG_PRETTY'] === 'true'
          ? {
              transport: {
                target: 'pino-pretty',
              },
            }
          : true,
    };
    this.fastify = Fastify(opts);
  }

  async init(
    registerPlugins: (app: FastifyInstance) => Promise<void>
  ): Promise<void> {
    await registerPlugins(this.fastify);
  }
}
