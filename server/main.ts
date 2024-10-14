import { type Context, Hono } from "@hono/hono";

export function server(PORT = 3000) {
  const app = new Hono();

  applyControllers(app, {
    ["/"]: (ctx) => ctx.text("Hello, World!"),
  });

  return Deno.serve({ port: PORT, handler: app.fetch });
}

type Route = string;

type ControllerRecord = Record<Route, (c: Context) => void>;

function applyControllers(app: Hono, controllers: ControllerRecord) {
  if (!controllers) {
    console.error("No controllers provided");
    return;
  }

  for (const route in controllers) {
    const handler = controllers[route];
    console.log(`Applying controller for route: ${route}`);
    app.use(route, handler);
  }
}
