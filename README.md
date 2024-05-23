# fastify-kata

https://fastify.dev/ as TypeScript monorepo bundled with esbuild

## Install

```console
npm ci --ignore-scripts
```

## Build and run
```console
npm run build
npm run start
```

## DB
```console
export $(grep -v '^#' .env.local | xargs)
docker compose up db
```

## Dev

```console
npm run test
npm run start:dev
```
```console
curl -i http://localhost:3000/health
curl -i http://localhost:3000/openapi.json
curl -i http://localhost:3000/docs # available only on start:dev
```
