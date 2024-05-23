import type { PostgresJsOptions } from 'plugins';

export function getDbOptions(): PostgresJsOptions {
    const {
        // DB_HOST,
        LOCAL_DB_HOST,
        DB_PORT,
        DB_NAME,
        DB_USER,
        DB_PASSWORD,
        APPLICATION_NAME,
    } = process.env;

    return {
        host: LOCAL_DB_HOST,
        port: Number(DB_PORT),
        database: DB_NAME,
        user: DB_USER,
        pass: DB_PASSWORD,
        connection: {
            application_name: APPLICATION_NAME,
        },
    };
}
