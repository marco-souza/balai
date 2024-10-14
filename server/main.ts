import { type Context, Hono } from "@hono/hono";

export function server(PORT = 3000) {
  const app = new Hono();

  app.use("/", async (ctx) => {
    await Promise.resolve();
    ctx.text("Hono!");
  });

  return Deno.serve({ port: PORT, handler: app.fetch });
}
