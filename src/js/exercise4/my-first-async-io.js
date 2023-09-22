const fs = require("fs");

const path = process.argv[2];

fs.readFile(path, (error, bufferData) => {
  if (error) {
    console.log(error);
  }

  const data = bufferData.toString();
  const numberOfLines = data.split("\n").length - 1;
  console.log(numberOfLines);
});
