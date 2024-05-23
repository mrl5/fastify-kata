import type { FastifyPluginAsync } from 'fastify';
import fp from 'fastify-plugin';
import postgres from 'postgres';
import type { Options, PostgresType } from 'postgres';

declare module 'fastify' {
    interface FastifyInstance {
        sql: ReturnType<typeof postgres>;
    }
}

export type PostgresJsOptions<
    // biome-ignore lint/suspicious/noExplicitAny: allow any
    // biome-ignore lint/complexity/noBannedTypes: allow empty object
    T extends Record<string, PostgresType<any>> = {},
> = Options<T>;

const postgresJsPlugin: FastifyPluginAsync<PostgresJsOptions> = async (
    fastify,
    options,
) => {
    const sql = postgres(options);
    fastify.decorate('sql', sql);
    fastify.addHook('onClose', async () => {
        await sql.end({ timeout: 5 });
    });
};

export const fastifyPostgresJs = fp(postgresJsPlugin);
