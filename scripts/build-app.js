#!/usr/bin/env node

// https://github.com/evanw/esbuild/issues/39#issuecomment-623083571
import { build } from 'esbuild';
import { cjsAdapter } from './esbuild-utils.js';

const options = {
    platform: 'node',
    target: 'node20',
    entryPoints: ['packages/app/main.ts'],
    bundle: true,
    minify: true,
    keepNames: true,
    external: ['esbuild'],
    logLevel: 'info',
    outfile: 'dist/app.mjs',
    format: 'esm',
    mainFields: ['module', 'main'],
    banner: {
        js: cjsAdapter,
    },
};

try {
    await build(options);
} catch (err) {
    process.stderr.write(err.stderr);
    process.exit(1);
}
