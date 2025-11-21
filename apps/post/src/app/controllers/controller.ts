import { FastifyReply, FastifyRequest } from 'fastify';
import {
  HttpResponder,
  HttpResponseFactory,
} from '@micro-services/api-factories';
import { PostService } from '../services/service';

export const getAllPosts = (req: FastifyRequest, reply: FastifyReply) => {
  const users = PostService.getAllPosts();
  return HttpResponder.send(reply, HttpResponseFactory.success(users));
};

export const getPostById = (
  req: FastifyRequest<{ Params: { id: number } }>,
  reply: FastifyReply
) => {
  const user = PostService.getPostById(req.params.id);
  return HttpResponder.send(reply, HttpResponseFactory.success(user));
};

export const POST_CONTROLLER = {
  getAllPosts,
  getPostById,
};
