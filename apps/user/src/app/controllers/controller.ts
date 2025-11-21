import { FastifyReply, FastifyRequest } from 'fastify';
import {
  HttpResponder,
  HttpResponseFactory,
} from '@micro-services/api-factories';

export const getAllUsers = (req: FastifyRequest, reply: FastifyReply) => {
  const users = req.server.services.user.getAllUsers();
  return HttpResponder.send(reply, HttpResponseFactory.success(users));
};

export const bulk = (
  req: FastifyRequest<{ Body: { ids: number[] } }>,
  reply: FastifyReply
) => {
  const users = req.server.services.user.getUsersByIds(req.body.ids);
  return HttpResponder.send(reply, HttpResponseFactory.success(users));
};

export const getUserById = (
  req: FastifyRequest<{ Params: { id: number } }>,
  reply: FastifyReply
) => {
  const user = req.server.services.user.getUserById(req.params.id);
  return HttpResponder.send(reply, HttpResponseFactory.success(user));
};

export const USER_CONTROLLER = {
  getAllUsers,
  bulk,
  getUserById,
};
