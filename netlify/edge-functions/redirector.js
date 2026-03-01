export default async (request) => {
  const url = new URL(request.url);

  // ← CHANGE THIS to your target domain
  const targetDomain = "https://ob-f2l-d8777cd4a639.herokuapp.com/";

  // Preserve path + search params + hash
  const newPath = url.pathname + url.search + url.hash;

  const redirectUrl = targetDomain + newPath;

  // 301 = permanent redirect (good for SEO)
  // Use 302 if you want temporary
  return Response.redirect(redirectUrl, 301);
};
