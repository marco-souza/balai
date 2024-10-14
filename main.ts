import { server } from "~/server/main.ts";

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  const port = Number(Deno.env.get("PORT") ?? 3001);
  server(port);
}
