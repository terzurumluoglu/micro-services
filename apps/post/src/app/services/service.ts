import { HttpError } from '@micro-services/api-models';
import { POSTS } from '../../mock';

export const getAllPosts = () => {
  return POSTS;
};

export const getPostById = (id: number) => {
  const post = POSTS.find((u) => u.id === id);
  if (!post) {
    throw new HttpError({
      statusCode: 404,
      message: 'Post not found',
      details: `Post Not Found with Id: ${id}`,
      code: 'POST_NOT_FOUND',
    });
  }
  return post;
};

export const PostService = {
  getAllPosts,
  getPostById,
};
