import http from "http";
import map from "through2-map";

const port = process.argv[2];

const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    const content = req.pipe(map((chunk) => chunk.toString().toUpperCase()));
    content.pipe(res);
  }
});

server.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
