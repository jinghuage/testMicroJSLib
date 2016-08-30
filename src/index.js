var snames = require("./snames.json");
var uniqueRandomArray = require("unique-random-array");
var getRandomItem = uniqueRandomArray(snames);

module.exports = {
  all:snames,
  random: random
};

function random(n){
  if(n === undefined){
    return getRandomItem();
  }
  else{
    var randomItems=[];
    for(var i=0; i<n; i++){
      var item = getRandomItem();
      randomItems.push(item);
    }
    return randomItems;
  }
}
