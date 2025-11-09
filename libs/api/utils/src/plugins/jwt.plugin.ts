// import {
//   type FastifyReply,
//   type FastifyRequest,
//   HookHandlerDoneFunction,
//   type FastifyInstance,
// } from 'fastify';
// import fp from 'fastify-plugin';
// import jwt from '@fastify/jwt';
// import { type EnvironmentConfig } from '@terzurumluoglu/core-models';

// type Hook = { key: 'jwtAccess' | 'jwtRefresh'; secret: string };

// const generateHooks = (config: EnvironmentConfig): Hook[] => {
//   const { JWT_AUTH_SECRET, JWT_REFRESH_SECRET } = config as EnvironmentConfig;

//   return [
//     { key: 'jwtAccess', secret: JWT_AUTH_SECRET },
//     { key: 'jwtRefresh', secret: JWT_REFRESH_SECRET },
//   ];
// };

// const jwtRegister = async (fastifyInstance: FastifyInstance) => {
//   const hooks = generateHooks(fastifyInstance.config);

//   hooks.forEach((value) => {
//     const { key, secret } = value;
//     fastifyInstance.register(async (fastify) => {
//       await fastify.register(jwt, { secret });

//       fastifyInstance.addHook(
//         'preHandler',
//         (
//           req: FastifyRequest,
//           _: FastifyReply,
//           done: HookHandlerDoneFunction
//         ) => {
//           req[key] = fastify.jwt;
//           return done();
//         }
//       );
//     });
//   });
// };

// export default fp(jwtRegister);

// // fastifyInstance.addHook('preHandler', (req, res, next) => {
// //   // here we are
// //   req.jwt = fastifyInstance.jwt;
// //   return next();
// // });
