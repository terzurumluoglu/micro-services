import { FastifyReply, FastifyRequest } from "fastify";

export const HEALTH_CHECK_HANDLER = (req: FastifyRequest, reply: FastifyReply) => {
    const response = {
        code: 200,
        success: true,
        data: {
            message: 'OK',
        },
        environment: process.env.ENVIRONMENT,
        correlationId: req.correlationId,
    };
    reply.code(200).send(response);
}