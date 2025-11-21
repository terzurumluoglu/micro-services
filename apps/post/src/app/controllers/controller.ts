import { FastifyReply, FastifyRequest } from 'fastify';
import {
  HttpResponder,
  HttpResponseFactory,
} from '@micro-services/api-factories';

export const getAllPosts = async (req: FastifyRequest, reply: FastifyReply) => {
  const posts = await req.server.services.post.getAllPosts();

  return HttpResponder.send(reply, HttpResponseFactory.success(posts));
};

export const getPostById = async (
  req: FastifyRequest<{ Params: { id: number } }>,
  reply: FastifyReply
) => {
  const post = await req.server.services.post.getPostById(req.params.id);
  return HttpResponder.send(reply, HttpResponseFactory.success(post));
};

export const POST_CONTROLLER = {
  getAllPosts,
  getPostById,
};
