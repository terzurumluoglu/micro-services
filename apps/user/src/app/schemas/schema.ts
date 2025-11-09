import { UserSchema } from '../models/user';

const SUCCESS_PROPERTIES = {
  statusCode: { type: 'number' },
  success: { type: 'boolean' },
  timestamp: { type: 'string' },
};

const FAILURE_PROPERTIES = {
  success: { type: 'boolean' },
  statusCode: { type: 'number' },
  timestamp: { type: 'string' },
  error: {
    type: 'object',
    properties: {
      code: { type: 'string' },
      message: { type: 'string' },
      details: { type: 'string' },
    },
  },
};

const REQUIRED_PROPERTIES = ['statusCode', 'success', 'timestamp', 'result'];

const getAllUsers = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          ...SUCCESS_PROPERTIES,
          result: {
            type: 'array',
            items: UserSchema,
          },
        },
        required: REQUIRED_PROPERTIES,
      },
    },
  },
};

const getUserById = {
  schema: {
    params: {
      type: 'object',
      properties: {
        id: { type: 'number' },
      },
      required: ['id'],
    },
    response: {
      200: {
        type: 'object',
        properties: {
          ...SUCCESS_PROPERTIES,
          result: UserSchema,
        },
        required: REQUIRED_PROPERTIES,
      },
      404: {
        type: 'object',
        properties: {
          ...FAILURE_PROPERTIES,
        },
      },
    },
  },
};

export const USER_SCHEMA = {
  getAllUsers,
  getUserById,
};
