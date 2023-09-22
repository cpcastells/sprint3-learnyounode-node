const http = require("http");
const { URL } = require("url");

const port = process.argv[2];
const pathParse = "/api/parsetime";
const pathUnix = "/api/unixtime";

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    const parsedUrl = new URL(req.url, "https://example.com");
    const isoTime = parsedUrl.searchParams.get("iso");
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
