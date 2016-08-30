var expect = require("chai").expect;
var snames = require("./index");

describe("test-micro-jslib", function(){
  describe("all", function(){
    it("should be an array of strings", function(){
      expect(snames.all).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(array){
        return array.every(function(item){
          return typeof item === 'string';
        })
      }
    });

    it("should contain mollie", function(){
      expect(snames.all).to.include("mollie");
    })
  });

  describe("random", function(){
    it("should return a random item from snames.all", function(){
      var randomItem = snames.random();
      expect(snames.all).to.include(randomItem);
    });

    it("should return an array of items if passed a number", function(){
      var randomItems = snames.random(3);
      expect(randomItems).to.have.length(3);
      randomItems.forEach(function(item){
        expect(snames.all).to.include(item);
      });
    });
  });

});
