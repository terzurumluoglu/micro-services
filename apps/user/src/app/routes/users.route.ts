import { FastifyInstance } from 'fastify';
import { USER_CONTROLLER } from '../controllers/controller';
import { USER_SCHEMA } from '../schemas/schema';

export default async function userRoutes(fastify: FastifyInstance) {
  fastify
    .get('/', USER_SCHEMA.getAllUsers, USER_CONTROLLER.getAllUsers)
    .get('/:id', USER_SCHEMA.getUserById, USER_CONTROLLER.getUserById);
}
