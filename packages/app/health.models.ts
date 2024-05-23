import type { FromSchema, JSONSchema } from 'json-schema-to-ts';

export const healthCode = {
    $id: 'HealthCode',
    type: 'string',
    enum: ['healthy', 'degraded'],
} as const satisfies JSONSchema;

export type HealthCode = FromSchema<typeof healthCode>;

export const healthRes = {
    type: 'object',
    properties: {
        code: {
            $ref: 'HealthCode#',
        },
    },
    required: ['code'],
} as const satisfies JSONSchema;

export type HealthRes = FromSchema<
    typeof healthRes,
    { references: [typeof healthCode] }
>;
