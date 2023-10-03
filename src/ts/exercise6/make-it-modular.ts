import filterFiles from "./mymodule.js";

const path = process.argv[2];
const extension = process.argv[3];

filterFiles(path, extension, (error: Error, files: string[]) => {
  if (error) {
    console.error("There was an error: ", error);
  }

  files.forEach((file) => {
    console.log(file);
  });
});
