import { fetchDataFromUrl } from "./http-collect";
import http from "http";
import fs from "fs";
import path from "path";

let server: http.Server;

describe("Given a http-collect script,", () => {
  beforeAll(() => {
    server = http.createServer((_req, res) => {
      fs.readFile(path.join(__dirname, "test.html"), (err, data) => {
        if (err) {
          res.writeHead(404);
          res.end("Error loading test.html");
          return;
        }

        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
    });

    server.listen(80);
  });

  afterAll((done) => {
    server.close(done);
  });

  describe("When it is executed with a local server url", () => {
    test("Then it should receive the expected HTML content in the response", async () => {
      const expectedLog = `Mock Page`;
      const domain = "http://localhost:80/";

      const result = await fetchDataFromUrl(domain);

      expect(result).toContain(expectedLog);
    });
  });
});
