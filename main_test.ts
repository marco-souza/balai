import { assertEquals } from "@std/assert";
import { server } from "./main.ts";

Deno.test("server", async () => {
  const s = server();

  Deno.test("fetch root path", async () => {
    const res = await fetch("http://localhost:" + s.addr.port);

    assertEquals(res.status, 200);
    assertEquals(await res.text(), "Hono!");
  });

  await s.shutdown();
});
