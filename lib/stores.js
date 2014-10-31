var reflux = require('reflux');
var actions = require('./actions');

//only one store this time, but general pattern
var stores = {
  numberStore: reflux.createStore({
    init: function() {
        this.number = 0;

        this.listenTo(actions.increment, this.increment);
        this.listenTo(actions.decrement, this.decrement);
    },
    increment: function() {
      this.number++;
      this.trigger(this.number); //payload should be cloned if non-serializable?
    },
    decrement: function() {
      this.number--;
      this.trigger(this.number);
    }
  })
}

// if there was another store we could listen to it here
// stores.numberStore.listen(function(changedValue) {
//   doSomething(changedValue);
// });

module.exports = stores;



