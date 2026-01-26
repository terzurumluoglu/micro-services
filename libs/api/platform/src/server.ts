import Fastify, { FastifyBaseLogger, FastifyHttpOptions, FastifyInstance, RawServerDefault } from "fastify";
// import { registerCorePlugins } from "@micro-services/api-core";

export class Server {
  readonly fastify: FastifyInstance;

  constructor(opts?: FastifyHttpOptions<RawServerDefault, FastifyBaseLogger>) {
    this.fastify = Fastify(opts);
    // registerCorePlugins(this.fastify);
  }

  async start(port: number, host = '0.0.0.0') {
    await this.fastify.listen({ port, host });
  }
}
