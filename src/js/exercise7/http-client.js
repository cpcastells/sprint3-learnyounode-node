import http from "http";

const url = process.argv[2];

http.get(url, (res) => {
  res.setEncoding("utf-8");

  res.on("error", (error) => {
    console.log(error);
  });

  res.on("data", (data) => {
    console.log(data);
  });
});
