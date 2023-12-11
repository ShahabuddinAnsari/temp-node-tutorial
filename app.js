const _ = require("lodash");

const inputArr = [1, 2, [3, 4, 5], [5, 6, 4]];
console.log(_.flattenDeep(inputArr));
