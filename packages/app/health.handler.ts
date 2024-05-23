import type { RouteHandler } from 'fastify';
import type { HealthCode, HealthRes } from './health.models.js';

export const getHealthHandler: RouteHandler<{ Reply: HealthRes }> = async (
    req,
    res,
) => {
    let code: HealthCode = 'degraded';
    try {
        await req.server.sql`SELECT 1`;
        code = 'healthy';
    } catch (err) {
        req.log.error(err);
    }
    res.send({ code });
};
