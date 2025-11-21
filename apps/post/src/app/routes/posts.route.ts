import { FastifyInstance } from 'fastify';
import { POST_CONTROLLER } from '../controllers/controller';
import { POST_SCHEMA } from '../schemas/schema';

export default async function userRoutes(fastify: FastifyInstance) {
  fastify
    .get('/', POST_SCHEMA.getAllPosts, POST_CONTROLLER.getAllPosts)
    .get('/:id', POST_SCHEMA.getPostById, POST_CONTROLLER.getPostById);
}
