const http = require("http");

const urls = [process.argv[2], process.argv[3], process.argv[4]];
const contents = ["", "", ""];
let completedFetch = 0;

for (let i = 0; i < urls.length; i++) {
  http.get(urls[i], (res) => {
    res.setEncoding("utf-8");

    res.on("error", (error) => {
      console.error(error);
    });

    res.on("data", (chunk) => {
      contents[i] += chunk;
    });

    res.on("end", () => {
      completedFetch++;
      if (completedFetch === contents.length) {
        contents.forEach((content) => console.log(content));
      }
    });
  });
}
