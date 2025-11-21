import fp from 'fastify-plugin';
import { UserService } from '../services/service';

export default fp(async (fastify) => {
  fastify.decorate('services', {
    user: UserService(fastify),
  });
});
