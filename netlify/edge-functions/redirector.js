// Cloudflare Worker Reverse Proxy
// Replace with your target site
const TARGET = "https://ob-f2l-d8777cd4a639.herokuapp.com";

export default {
  async fetch(request) {

    const incoming = new URL(request.url);

    // Build proper target URL
    const target = new URL(incoming.pathname + incoming.search, TARGET);

    const newRequest = new Request(target.toString(), {
      method: request.method,
      headers: request.headers,
      body: request.body,
      redirect: "manual"
    });

    const response = await fetch(newRequest);

    return new Response(response.body, response);
  }
}
