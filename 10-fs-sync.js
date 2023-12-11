const { readFileSync, writeFileSync } = require("fs");

console.log("start");

const firstFile = readFileSync("./content/first.txt", "utf8");
const secondFile = readFileSync("./content/second.txt", "utf8");

writeFileSync(
  "./content/result-sync.txt",
  `Here are the file contensts : ${firstFile} : ${secondFile}\n`,
  { flag: "a" }
);

console.log("done with this task");
console.log("starting the next one");
