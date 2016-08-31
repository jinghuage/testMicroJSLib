//var snames = require("./snames.json");
//var uniqueRandomArray = require("unique-random-array");

//these are es6 syntax: import instead of require
import uniqueRandomArray from 'unique-random-array';
import snames from './snames.json';

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
