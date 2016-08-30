var snames = require("./snames.json");
var uniqueRandomArray = require("unique-random-array");

module.exports = {
  all:snames,
  random:uniqueRandomArray(snames)
};
