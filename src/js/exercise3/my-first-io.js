const fs = require("fs");

const path = process.argv[2];

const text = fs.readFileSync(path, "utf-8");
const numberOfLines = text.split("\n").length - 1;
console.log(numberOfLines);
