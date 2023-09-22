const http = require("http");

const url = process.argv[2];

let body = "";

http.get(url, (res) => {
  res.setEncoding("utf-8");

  res.on("data", (chunk) => {
    body += chunk;
  });

  res.on("end", () => {
    console.log(body.length);
    console.log(body);
  });
});
