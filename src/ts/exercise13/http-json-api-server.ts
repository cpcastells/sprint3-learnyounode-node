import http from "http";
import { URL } from "url";

const port = process.argv[2];
const pathParse = "/api/parsetime";
const pathUnix = "/api/unixtime";

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    const parsedUrl = new URL(req.url!, "https://example.com");
    const isoTime = parsedUrl.searchParams.get("iso");

    if (!isoTime) {
      res.writeHead(400, { "Content-Type": "text/plain" });
      res.end("iso parameter missing or invalid");
      return;
    }

    const date = new Date(isoTime);

    if (parsedUrl.pathname === pathParse) {
      const response = {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds(),
      };

      res.write(JSON.stringify(response));
      res.end();
    } else if (parsedUrl.pathname === pathUnix) {
      const response = {
        unixtime: date.getTime(),
      };

      res.write(JSON.stringify(response));
      res.end();
    }
  }
});

server.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
