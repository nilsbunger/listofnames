


var AppDispatcher = require('./AppDispatcher.jsx');
var assign = require('object-assign');  // ES6 polyfill
var EventEmitter = require('events').EventEmitter;
var NameConstants = require('./NameConstants.jsx');

// event emitted by this Store:
var CHANGE_EVENT = 'change';

var _names = {};

var NameStore = assign({}, EventEmitter.prototype, {


    getAll: function() {
        return _names;
    },

    getNameCount: function() {
        return Object.keys(_names).length;  // inefficient O(n)
    },


    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },


    //
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    /**
     * @param {function} callback
     */
    removeChangeListener: function(callback) {
      this.removeListener(CHANGE_EVENT, callback);
    }
});

// Register callback to handle all updates
AppDispatcher.register(function(action) {
    var text;
    switch(action.actionType) {
        case NameConstants.NAME_ADD:
            console.log("TODO: store the added name here");
            NameStore.emitChange();
            break;
        default:
            // no-op
    }
});

module.exports = NameStore;