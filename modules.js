const sayHi = require(".data/utils");
const names = require(".data/names");
const data = require(".data/alternativeFlavor");
require(".data/mindGranade");

sayHi("Susan");
sayHi(names.john);
sayHi(names.peter);
console.log(data.items);
