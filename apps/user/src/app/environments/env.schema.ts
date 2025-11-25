import { FastifyEnvOptions } from '@fastify/env';

export const ENV_SCHEMA: FastifyEnvOptions = {
  schema: {
    type: 'object',
    required: ['PORT', 'MESSAGE'],
    properties: {
      HOST: { type: 'string', default: '0.0.0.0' },
      PORT: { type: 'number', default: 3000 },
      MESSAGE: { type: 'string', default: 'Service running on port {{PORT}}' },
      ENVIRONMENT: { type: 'string', default: 'development' },
      LOG_PRETTY: { type: 'boolean', default: true },
      CONNECTION_STRING: {
        type: 'string',
        default:
          'mongodb+srv://{{USERNAME}}:{{PASSWORD}}@githubsample.dzkl76j.mongodb.net/{{NAME}}?retryWrites=true',
      },
      DB_NAME: { type: 'string', default: 'GithubTest' },
      DB_PASSWORD: { type: 'string', default: 'I0cwuciWGJNjjPEI' },
      DB_USERNAME: { type: 'string', default: 'toprakerzurumluoglu' },
    },
  },
  confKey: 'config',
};
