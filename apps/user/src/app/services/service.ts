import { HttpError } from '@micro-services/api-models';
import { USERS } from '../../mock';
import { FastifyInstance } from 'fastify';

export const UserService = (fastify: FastifyInstance) => {
  return {
    getAllUsers: () => {
      return USERS;
    },
    getUsersByIds: (ids: number[]) => {
      return USERS.filter((user) => ids.includes(user.id));
    },
    getUserById: (id: number) => {
      const user = USERS.find((u) => u.id === id);
      if (!user) {
        throw new HttpError({
          statusCode: 404,
          message: 'User not found',
          details: `User Not Found with Id: ${id}`,
          code: 'USER_NOT_FOUND',
        });
      }
      return user;
    },
  };
};
