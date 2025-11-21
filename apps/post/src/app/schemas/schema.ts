import { PostSchema } from '../models/post';

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

const getAllPosts = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          ...SUCCESS_PROPERTIES,
          result: {
            type: 'array',
            items: PostSchema,
          },
        },
        required: REQUIRED_PROPERTIES,
      },
    },
  },
};

const getPostById = {
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
          result: PostSchema,
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

export const POST_SCHEMA = {
  getAllPosts,
  getPostById,
};
