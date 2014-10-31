var reflux = require('reflux');
var stores = require('./stores');

var numberDisplay = document.querySelector('#number');

stores.numberStore.listen(function(number) {
  numberDisplay.textContent = number;
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



