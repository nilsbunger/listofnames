var AppDispatcher = require('../AppDispatcher.jsx');
var assign = require('object-assign');  // ES6 polyfill
var EventEmitter = require('events').EventEmitter;
var NameConstants = require('../NameConstants.jsx');

// event emitted by this Store:
var CHANGE_EVENT = 'change';

var _messages = [];

var MessageStore = assign({}, EventEmitter.prototype, {

    // the Store could be smart and make a web api request call if it doesn't have any data,
    // which will ultimately result in a NAME_ADD event coming back.

    getAll: function() {
        return _messages;
    },

    getNameCount: function() {
        return _messages.length;
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
        case NameConstants.MESSAGES_ADD:
            _messages = action.data;    // concat the two lists
            MessageStore.emitChange();
            break;
        default:
            // no-op
    }
});

module.exports = MessageStore;