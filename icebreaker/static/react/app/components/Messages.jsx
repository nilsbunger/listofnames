
var React = require('react');
var Message = require('./Message.jsx');
var MessageStore = require('../stores/MessageStore.jsx');
var WebApi = require('../WebApiUtils.jsx');


var Messages = React.createClass({


    getInitialState: function() {
        return {messages: []};
    },

    // attach / remove listener for changes in the Store
    componentDidMount: function() {
        MessageStore.addChangeListener(this._onChange);
        WebApi.getMessages();  // kick off an initial AJAX call
    },

    componentWillUnmount: function() {
        MessageStore.removeChangeListener(this._onChange);
    },

    // on a change from the NameStore.
    _onChange: function() {
        var messages = MessageStore.getAll();
        this.setState({messages: messages});
    },


    render () {
      var _this = this;
      return (<div>
        {this.state.messages.map(function(message) {
            return <Message key={message.id} msg={message}
            /> })
        }
        </div>
      );
    }
});

module.exports=Messages;