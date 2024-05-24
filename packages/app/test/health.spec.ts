import * as assert from 'node:assert';
import { test } from 'node:test';
import type { TestContext } from 'node:test';
import Fastify from 'fastify';
import { health } from '../health.router.js';

function build(t: TestContext) {
    const app = Fastify({ logger: false });
    app.register(health);

    t.after(() => app.close());
    return app;
}

test('health root route', async (t) => {
    const app = await build(t);
    const res = await app.inject({
        url: '/',
    });
    assert.strictEqual(
        res.headers['cache-control'],
        'no-store, no-cache, max-age=0, must-revalidate, proxy-revalidate',
    );
    assert.strictEqual(res.statusCode, 200);
});
