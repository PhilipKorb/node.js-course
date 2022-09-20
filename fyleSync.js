const { readFileSync, writeFileSync } = require("fs");
// other method
//const fs = require("fs");

const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

console.log(first);
console.log(second);

writeFileSync(
  "./content/result-sync.txt",
  `Here is the result Sync: ${first}, ${second}.`,
  { flag: "w" }
  // flag a sobrepoe os dados no arquivo a cada execução
  // flag w default
);
