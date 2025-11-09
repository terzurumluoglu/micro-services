// import { type FastifyInstance } from 'fastify';
// import fp from 'fastify-plugin';
// import mongodb from '@fastify/mongodb';
// import { EnvironmentConfig } from '@terzurumluoglu/core-models';
// import { Database } from '@terzurumluoglu/api-db';

// export default fp(async (fastifyInstance: FastifyInstance) => {
//   const { CONNECTION_STRING, DB_NAME, DB_PASSWORD, DB_USERNAME } =
//     fastifyInstance.config as EnvironmentConfig;

//   const url: string = CONNECTION_STRING.replace('{{USERNAME}}', DB_USERNAME)
//     .replace('{{PASSWORD}}', DB_PASSWORD)
//     .replace('{{NAME}}', DB_NAME);

//   await fastifyInstance.register(mongodb, {
//     // force to close the mongodb connection when app stopped
//     // the default value is false
//     forceClose: true,
//     url,
//   });

//   await Database.init(url, DB_NAME);
// });
