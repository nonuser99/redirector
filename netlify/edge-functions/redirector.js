// Cloudflare Worker Reverse Proxy
// Replace with your target site
const TARGET = "https://ob-f2l-d8777cd4a639.herokuapp.com";

export default {
  async fetch(request) {

    const url = new URL(request.url);

    // Build new target URL with same path & query
    const targetUrl = TARGET + url.pathname + url.search;

    const newRequest = new Request(targetUrl, {
      method: request.method,
      headers: request.headers,
      body: request.body,
      redirect: "manual"
    });

    const response = await fetch(newRequest);

    // Clone response
    const newResponse = new Response(response.body, response);

    // Optional: rewrite headers
    newResponse.headers.set("Access-Control-Allow-Origin", "*");

    return newResponse;
  }
}
