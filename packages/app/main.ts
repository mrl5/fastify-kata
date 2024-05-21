import Fastify from 'fastify';
import sensible from './plugins/sensible.js';
import { health } from './routes/health.js';

const server = Fastify({
    logger: {
        level: 'info',
    },
});

server.register(sensible);
server.register(health, { prefix: '/health' });

server.listen({ port: 3000 }, (err, address) => {
    if (err) {
        server.log.error(err);
        process.exit(1);
    }
});
