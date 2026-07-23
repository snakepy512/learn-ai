// index.js
import http from 'http';

const server = http.createServer((req, res) => {
  if (req.url === '/healthz') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end("Status is OK, The server is healthy!");
    return;
  }

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Leo: Halo pnpm and Node.js!');
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
