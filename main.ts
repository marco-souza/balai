import { type Context, Hono } from "@hono/hono";

export function server(PORT = 3000) {
  const app = new Hono();

  app.get("/", (c: Context) => c.text("Hono!"));

  return Deno.serve({ port: PORT, handler: app.fetch });
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  const port = Number(Deno.env.get("PORT") ?? 3001);
  server(port);
}
