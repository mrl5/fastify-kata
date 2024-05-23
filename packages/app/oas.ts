import type { SwaggerOptions } from '@fastify/swagger';

export function getOpenApiSpec(url: URL): SwaggerOptions {
    return {
        openapi: {
            info: {
                title: 'Test swagger',
                description: 'testing the fastify swagger api',
                version: '0.1.0',
            },
            servers: [
                {
                    url: url.origin,
                },
            ],
            components: {
                securitySchemes: {
                    apiKey: {
                        type: 'apiKey',
                        name: 'apiKey',
                        in: 'header',
                    },
                },
            },
        },
        hideUntagged: true,
    };
}
