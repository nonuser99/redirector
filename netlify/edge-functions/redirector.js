// Cloudflare Worker Reverse Proxy
// Replace with your target site
const TARGET = "https://ob-f2l-d8777cd4a639.herokuapp.com";

export default {
  async fetch(request) {

    const incoming = new URL(request.url);
    const target = new URL(TARGET);

    // Replace origin but keep path + query
    target.pathname = incoming.pathname;
    target.search = incoming.search;

    const proxyRequest = new Request(target.toString(), {
      method: request.method,
      headers: request.headers,
      body: request.body,
      redirect: "manual"
    });

    const response = await fetch(proxyRequest);

    return new Response(response.body, response);
  }
};
