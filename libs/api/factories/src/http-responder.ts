import { FastifyReply } from 'fastify';
import { SuccessResponse, FailureResponse } from '@micro-services/api-models';

export class HttpResponder {
  static send<T>(
    reply: FastifyReply,
    response: SuccessResponse<T> | FailureResponse
  ): FastifyReply {
    return reply.code(response.statusCode).send(response.toJSON());
  }
}
