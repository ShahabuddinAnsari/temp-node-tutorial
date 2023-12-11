const path = require("path");

console.log("delimiter: ", path.delimiter);
console.log("sep: ", path.sep);

const filePath = path.join("content", "subfolder", "test.txt");
console.log("filePath: ", filePath);

const base = path.basename(filePath);
console.log("base: ", base);

const absolute = path.resolve(__dirname, filePath);
console.log("absolute: ", absolute);
