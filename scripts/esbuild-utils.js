/**
 * @link https://github.com/evanw/esbuild/issues/1921#issuecomment-1623640043
 */
export const cjsAdapter = `
const require = (await import("node:module")).createRequire(import.meta.url);
const __filename = (await import("node:url")).fileURLToPath(import.meta.url);
const __dirname = (await import("node:path")).dirname(__filename);
`;
