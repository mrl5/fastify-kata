import type {AutoloadPluginOptions} from "@fastify/autoload";

export type AppOptions = {
  // Place your custom options for app below here.
} & Partial<AutoloadPluginOptions>;
