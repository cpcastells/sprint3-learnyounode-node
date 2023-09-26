import fs from "fs";

const path = process.argv[2];

fs.readFile(path, (error, bufferData) => {
  if (error) {
    console.log("There was an error: ", error);
  }

  const data = bufferData.toString();
  const numberOfLines = data.split("\n").length - 1;
  console.log(numberOfLines);
});
