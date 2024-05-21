import sensible from '@fastify/sensible';
import type { SensibleOptions } from '@fastify/sensible';
import type { FastifyPluginAsync } from 'fastify';
import fp from 'fastify-plugin';

const sensiblePlugin: FastifyPluginAsync = async (fastify) => {
    fastify.register(sensible);
};

export const fastifySensible = fp<SensibleOptions>(sensiblePlugin);
