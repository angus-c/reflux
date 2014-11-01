var reflux = require('reflux');
var numberStore = require('./number_store');

var lowest = 0;
var highest = 0;
var newLowest;
var newHighest;

var store = reflux.createStore({
  init: function() {
    numberStore.listen(detectMinMax);
  }
})

function detectMinMax(number) {
  newLowest = Math.min(number, lowest);
  newHighest = Math.max(number, highest);
  if(newLowest < lowest) {
    lowest = newLowest;
    store.trigger({lowest: lowest});
  }
  if(newHighest > highest) {
    highest = newHighest;
    store.trigger({highest: highest});
  }
}

module.exports = store;




