import swagger from '@fastify/swagger';
import scalarUi from '@scalar/fastify-api-reference';
import Fastify from 'fastify';
import { fastifySensible } from 'plugins';
import { health } from './health.router.js';
import { getOpenApiSpec } from './oas.js';

const port = 3000;
const domain = 'localhost';
const u = new URL(`http://${domain}:${port}`);
const specPath = '/openapi.json';
const docsPath = '/docs';

const server = Fastify({
    logger: {
        level: 'info',
    },
});

server.register(swagger, getOpenApiSpec(u));
server.get(specPath, async () => {
    return server.swagger();
});
if (process.env.ENV === 'dev') {
    server.register(scalarUi, { routePrefix: docsPath });
}

server.register(fastifySensible, { sharedSchemaId: 'HttpError' });

server.register(health, { prefix: '/health' });

server.listen({ port }, (err) => {
    if (err) {
        server.log.error(err);
        process.exit(1);
    }
});
