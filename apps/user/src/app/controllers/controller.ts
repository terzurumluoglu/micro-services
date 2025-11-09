import { FastifyReply, FastifyRequest } from 'fastify';
import {
  HttpResponder,
  HttpResponseFactory,
} from '@micro-services/api-factories';
import { UserService } from '../services/service';

export const getAllUsers = (req: FastifyRequest, reply: FastifyReply) => {
  const users = UserService.getAllUsers();
  return HttpResponder.send(reply, HttpResponseFactory.success(users));
};

export const getUserById = (
  req: FastifyRequest<{ Params: { id: number } }>,
  reply: FastifyReply
) => {
  const user = UserService.getUserById(req.params.id);
  return HttpResponder.send(reply, HttpResponseFactory.success(user));
};

export const USER_CONTROLLER = {
  getAllUsers,
  getUserById,
};
