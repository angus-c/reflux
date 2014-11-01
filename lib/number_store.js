var reflux = require('reflux');
var actions = require('./actions');

var number = 0;

module.exports = reflux.createStore({
  init: function() {
      this.listenTo(actions.increment, this.increment);
      this.listenTo(actions.decrement, this.decrement);
  },
  increment: function() {
    this.trigger(++number); //payload should be cloned if non-serializable?
  },
  decrement: function() {
    this.trigger(--number);
  }
})





