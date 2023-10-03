import http from "http";

const urls = [process.argv[2], process.argv[3], process.argv[4]];
const contents = ["", "", ""];
let completedFetch = 0;

const fetchData = (url: string, index: number) => {
  http.get(url, (res) => {
    res.setEncoding("utf-8");

    res.on("error", (error) => {
      console.error(error);
    });

    res.on("data", (chunk: string) => {
      contents[index] += chunk;
    });

    res.on("end", () => {
      completedFetch++;
      if (completedFetch === contents.length) {
        contents.forEach((content) => {
          console.log(content);
        });
      }
    });
  });
};

urls.forEach((url, index) => {
  fetchData(url, index);
});
