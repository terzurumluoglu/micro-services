export const HEALTH_CHECK_SCHEMA = {
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
};


