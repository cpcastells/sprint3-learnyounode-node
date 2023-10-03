import fs from "fs";

type Callback = (
  error: NodeJS.ErrnoException | undefined,
  result?: string[],
) => void;

const filterFiles = (path: string, extension: string, callback: Callback) => {
  fs.readdir(path, (error, files) => {
    if (error) {
      callback(error);
      return;
    }

    const filteredFiles = files.filter((file) =>
      file.includes("." + extension),
    );
    callback(undefined, filteredFiles);
  });
};

export default filterFiles;
