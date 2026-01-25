// import fp from 'fastify-plugin';
// import {
//   FastifyError,
//   FastifyInstance,
//   FastifyReply,
//   FastifyRequest,
// } from 'fastify';
// import { RESPONSE_CODES } from '@micro-services/core-models';
// import { HttpError } from '@micro-services/api-models';
// import { HttpResponseFactory } from '@micro-services/api-factories';

// export default fp(async (fastifyInstance: FastifyInstance) => {
//   fastifyInstance.setErrorHandler(
//     (error, _: FastifyRequest, reply: FastifyReply) => {
//       if (error instanceof HttpError) {
//         // HttpError'ı FailureResponse'a dönüştür
//         const response = HttpResponseFactory.failure(error);
//         return reply
//           .code(response.statusCode)
//           .type('application/json')
//           .send(response.toJSON());
//       }
//       const {
//         code,
//         message,
//         stack,
//         statusCode = RESPONSE_CODES.INTERNAL,
//       } = error as FastifyError;

//       const err = new HttpError({
//         code,
//         message,
//         stack,
//         statusCode,
//         details: message,
//       });

//       const response = HttpResponseFactory.failure(err);
//       return reply
//         .code(response.statusCode)
//         .type('application/json')
//         .send(response.toJSON());
//     }
//   );
// });
