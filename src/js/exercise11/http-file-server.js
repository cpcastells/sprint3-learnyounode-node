import http from "http";
import fs from "fs";

const port = process.argv[2];
const path = process.argv[3];

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/plain" });

  const stream = fs.createReadStream(path);

  stream.pipe(res);
});

server.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
