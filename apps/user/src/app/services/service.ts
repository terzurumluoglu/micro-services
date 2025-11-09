import { HttpError } from '@micro-services/api-models';
import { USERS } from '../../mock';

export const getAllUsers = () => {
  return USERS;
};

export const getUserById = (id: number) => {
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
};

export const UserService = {
  getAllUsers,
  getUserById,
};
