import { HttpError } from '@micro-services/api-models';
import { UserClient } from '@micro-services/api-user-client';
import { POSTS } from '../../mock';
import { FastifyInstance } from 'fastify';

export const PostService = (fastify: FastifyInstance) => {
  const userClient = new UserClient(fastify.config.USER_API_URL);

  return {
    getAllPosts: async () => {
      const userIds = [...new Set(POSTS.map((p) => p.userId))];

      const {
        data: { result: users },
      } = await userClient.getUsersByIds(userIds);

      const userMap = new Map(users.map((u) => [u.id, u]));

      return POSTS.map((post) => ({
        ...post,
        user: userMap.get(post.userId),
      }));
    },
    getPostById: async (id: number) => {
      const post = POSTS.find((u) => u.id === id);

      if (!post) {
        throw new HttpError({
          statusCode: 404,
          message: 'Post not found',
          details: `Post Not Found with Id: ${id}`,
          code: 'POST_NOT_FOUND',
        });
      }
      const { userId, ...others } = post;
      const {
        data: { result: user },
      } = await userClient.getUserById(userId);
      return {
        ...others,
        user,
      };
    },
  };
};
