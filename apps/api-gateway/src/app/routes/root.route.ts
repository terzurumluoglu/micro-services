import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import { HTML } from '../constants/html.constant';
import { PostClient } from '@micro-services/api-post-client';
import { UserClient } from '@micro-services/api-user-client';

export default async function rootRoutes(fastify: FastifyInstance) {
  const postClient = new PostClient(fastify.config.POST_API_URL);
  const userClient = new UserClient(fastify.config.USER_API_URL);

  fastify.get('/', (req: FastifyRequest, reply: FastifyReply) => {
    return reply.type('text/html').send(HTML);
  });

  fastify.get(
    '/health-check',
    {
      schema: {
        response: {
          200: {
            type: 'object',
            properties: {
              code: { type: 'number' },
              success: { type: 'boolean' },
              data: {
                type: 'object',
                properties: {
                  message: { type: 'string' },
                },
              },
              environment: { type: 'string' },
            },
            required: ['code', 'success', 'data', 'environment'],
          },
        },
      },
    },
    (req: FastifyRequest, reply: FastifyReply) => {
      reply.code(200).send({
        code: 200,
        success: true,
        data: {
          message: 'OK',
        },
        environment: process.env.NODE_ENV,
      });
    }
  );

  fastify.get('/posts', async () => {
    const {
      data: { result },
    } = await postClient.getAllPosts();

    return result;
  });

  fastify.get(
    '/posts/:id',
    async (req: FastifyRequest<{ Params: { id: number } }>) => {
      const {
        data: { result },
      } = await postClient.getPostById(req.params.id);
      return result;
    }
  );

  fastify.get('/users', async () => {
    const {
      data: { result },
    } = await userClient.getAllUsers();

    return result;
  });

  fastify.get(
    '/users/:id',
    async (req: FastifyRequest<{ Params: { id: number } }>) => {
      const {
        data: { result },
      } = await userClient.getUserById(req.params.id);

      return result;
    }
  );

  fastify.post(
    '/users/bulk',
    async (req: FastifyRequest<{ Body: { ids: number[] } }>) => {
      const {
        data: { result },
      } = await userClient.getUsersByIds(req.body.ids);
      return result;
    }
  );
}
