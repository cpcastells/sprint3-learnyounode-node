import http from "http";

const url = process.argv[2];

export async function fetchDataFromUrl(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    let body = "";

    http.get(url, (res) => {
      res.setEncoding("utf-8");

      res.on("data", (chunk: string) => {
        body += chunk;
      });

      res.on("end", () => {
        console.log(body.length);
        console.log(body);
        resolve(body);
      });

      res.on("error", (err) => {
        reject(err);
      });
    });
  });
}

fetchDataFromUrl(url)
  .then()
  .catch((error) => {
    console.error(`Error fetching data from ${url}:`, error);
  });
