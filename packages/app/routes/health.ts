import type { FastifyPluginAsync } from 'fastify';

export const health: FastifyPluginAsync = async (fastify, opts) => {
    fastify.get('/', async (request, reply) => {
        return { code: 'healthy' };
    });
};
