const filterFiles = require("./mymodule");

const path = process.argv[2];
const extension = process.argv[3];

filterFiles(path, extension, (error, files) => {
  if (error) {
    console.error("There was an error: ", error);
  }

  files.forEach((file) => console.log(file));
});
