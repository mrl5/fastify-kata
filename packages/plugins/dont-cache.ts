import type { FastifyPluginAsync } from 'fastify';
import fp from 'fastify-plugin';

/**
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching#dealing_with_outdated_implementations
 */
const kitchenSinkCacheControl =
    'no-store, no-cache, max-age=0, must-revalidate, proxy-revalidate';

const dontCachePlugin: FastifyPluginAsync = async (fastify) => {
    fastify.addHook('onRequest', async (_, res) => {
        res.header('cache-control', kitchenSinkCacheControl);
    });
};

export const dontCache = fp(dontCachePlugin);
