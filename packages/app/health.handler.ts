import type { RouteHandler } from 'fastify';
import type { HealthRes } from './health.models.js';

export const getHealthHandler: RouteHandler<{ Reply: HealthRes }> = async (
    _,
    res,
) => {
    res.send({ code: 'healthy' });
};
