import fs from "fs";
const path = process.argv[2];
const extension = process.argv[3];

fs.readdir(path, (error, files) => {
  if (error) {
    console.log(error);
    process.exit(0);
  }

  const filteredFiles = files.filter((file) => file.includes("." + extension));
  filteredFiles.forEach((file) => {
    console.log(file);
  });
});
