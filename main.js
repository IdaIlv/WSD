import { serve } from "https://deno.land/std@0.136.0/http/server.ts";

serve((req) => {
  return new Response("Hello, Deno Deploy!", { status: 200 });
});

console.log("Server running on http://localhost:8000");