import http from "http";

const port = process.argv[2];
const message = process.argv[3];
const path = "127.0.0.1";

const options = {
  hostname: path,
  port,
  method: "POST",
  headers: {
    "Content-Type": "text/plain",
  },
};

const req = http.request(options, (res) => {
  let data = "";

  res.setEncoding("utf8");

  res.on("data", (chunk: string) => {
    data += chunk;
  });

  res.on("end", () => {
    console.log(`RESPONSE: ${data}`);
  });
});

req.on("error", (e) => {
  console.error(`problem with request: ${e.message}`);
});

req.write(message);
req.end();
