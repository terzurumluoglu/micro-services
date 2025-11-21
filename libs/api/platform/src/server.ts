import Fastify, {
  FastifyBaseLogger,
  FastifyHttpOptions,
  FastifyInstance,
  RawServerDefault,
} from 'fastify';

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
