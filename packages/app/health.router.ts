import type { FastifyPluginAsync } from 'fastify';
import { getHealthHandler } from './health.handler.js';
import { healthCode, healthRes } from './health.models.js';

export const health: FastifyPluginAsync = async (fastify) => {
    fastify.addSchema(healthCode);
    fastify.get(
        '/',
        {
            schema: {
                description: 'Get health status',
                tags: ['health'],
                response: {
                    200: { ...healthRes },
                },
            },
        },
        getHealthHandler,
    );
};
