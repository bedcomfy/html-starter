export default async function middleware(req) {
  const { method, url } = req;

  // Middleware to handle CORS
  const headers = new Headers();
  headers.set('Access-Control-Allow-Origin', '*'); // Allow all origins
  headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Allow specific methods
  headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Allow specific headers

  // Handle preflight requests
  if (method === 'OPTIONS') {
      return new Response(null, {
          status: 200,
          headers: headers
      });
  }

  if (url === '/' && method === 'GET') {
      headers.set('Content-Type', 'text/plain');
      return new Response('Hello World!', {
          status: 200,
          headers: headers
      });
  } else {
      headers.set('Content-Type', 'text/plain');
      return new Response('Not Found', {
          status: 404,
          headers: headers
      });
  }
}