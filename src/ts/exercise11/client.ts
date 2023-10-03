import http from "http";

const port = process.argv[2];
const path = "127.0.0.1";

http
  .get(`http://${path}:${port}`, (res) => {
    let data = "";

    res.on("data", (chunk: string) => {
      data += chunk;
    });

    res.on("end", () => {
      console.log(data);
    });
  })
  .on("error", (err) => {
    console.error("Error making the request:", err.message);
  });
