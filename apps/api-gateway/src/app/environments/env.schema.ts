import { FastifyEnvOptions } from '@fastify/env';

export const ENV_SCHEMA: FastifyEnvOptions = {
  schema: {
    type: 'object',
    required: ['PORT', 'MESSAGE'],
    properties: {
      HOST: { type: 'string', default: '0.0.0.0' },
      PORT: { type: 'number', default: 3005 },
      MESSAGE: { type: 'string', default: 'Service running on port {{PORT}}' },
      ENVIRONMENT: { type: 'string', default: 'development' },
      LOG_PRETTY: { type: 'boolean', default: true },
    },
  },
  confKey: 'config',
};
