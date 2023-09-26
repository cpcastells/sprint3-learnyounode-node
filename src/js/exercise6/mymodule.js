import fs from "fs";

const filterFiles = (path, extension, callback) => {
  fs.readdir(path, (error, files) => {
    if (error) {
      return callback(error);
    }

    const filteredFiles = files.filter((file) =>
      file.includes("." + extension),
    );
    return callback(null, filteredFiles);
  });
};

export default filterFiles;
