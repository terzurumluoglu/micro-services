import fp from 'fastify-plugin';
import { PostService } from '../services/service';

export default fp(async (fastify) => {
  fastify.decorate('services', {
    post: PostService(fastify),
  });
});
