import http from "http";

const host = "127.0.0.1";
const serverPort = process.argv[2] || 3000;

const isoDate = new Date().toISOString();

const getParseTime = () => {
  const path = `/api/parsetime?iso=${isoDate}`;

  const options = {
    hostname: host,
    port: serverPort,
    path,
    method: "GET",
  };

  const req = http.request(options, (res) => {
    let data = "";
    res.on("data", (chunk: string) => {
      data += chunk;
    });

    res.on("end", () => {
      console.log(`Response from /api/parsetime: ${data}`);
    });
  });

  req.end();
};

const getUnixTime = () => {
  const path = `/api/unixtime?iso=${isoDate}`;

  const options = {
    hostname: host,
    port: serverPort,
    path,
    method: "GET",
  };

  const req = http.request(options, (res) => {
    let data = "";
    res.on("data", (chunk: string) => {
      data += chunk;
    });

    res.on("end", () => {
      console.log(`Response from /api/unixtime: ${data}`);
    });
  });

  req.end();
};

getParseTime();
getUnixTime();
