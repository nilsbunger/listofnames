
var React = require('react');
var NameStore = require('./NameStore.jsx');
var NameList = require('./NameList.jsx');
var WebApi = require('./WebApiUtils.jsx');

// import {render} from 'react-dom';

function getNameState() {
  return {
    allNames: NameStore.getAll(),
    nameCount: NameStore.getNameCount()
  };
}

// Top-level component which holds state. State goes thru properties to children.
var App = React.createClass({

    getInitialState: function() {
        return getNameState();
    },

    // on a change from the NameStore.
    _onChange: function() {
        this.setState(getNameState());
    },
    // attach / remove listener for changes in the Store
    componentDidMount: function() {
        NameStore.addChangeListener(this._onChange);
        WebApi.getNames();  // kick off an initial AJAX call
    },

    componentWillUnmount: function() {
        NameStore.removeChangeListener(this._onChange);
    },

    render () {
      return (<div>
            <p> Hello React!</p>
            <NameList allNames={this.state.allNames} nameCount={this.state.nameCount} />
        </div>
      );
    }
});

React.render(<App/>, document.getElementById('app'));

