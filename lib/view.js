var reflux = require('reflux');
var numberStore = require('./number_store');
var minmaxNumberStore = require('./minmax_number_store');

var numberDisplay = document.querySelector('#number');
var minNumberDisplay = document.querySelector('#min');
var maxNumberDisplay = document.querySelector('#max');

numberStore.listen(function(number) {
  numberDisplay.textContent = number;
});

minmaxNumberStore.listen(function(obj) {
  obj.lowest && (minNumberDisplay.textContent = obj.lowest);
  obj.highest && (maxNumberDisplay.textContent = obj.highest);
});


/*
 * messy stuff in lieu of triggering actions with jsAction...
 */

var actionsSelector = document.querySelector('#actions');
var actionTrigger = document.querySelector('#actionTrigger');

//populate actions
var actions = require('./actions');
Object.keys(actions).forEach(function(key) {
  var opt = document.createElement('OPTION');
  opt.text = opt.value = key;
  actionsSelector.appendChild(opt);
});

window.fireAction = function() {
  actions[actionsSelector.options[actionsSelector.selectedIndex].text]()
}



