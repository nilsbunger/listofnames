
var React = require('react');
var NameStore = require('./NameStore.jsx');
var NameList = require('./NameList.jsx');

// import {render} from 'react-dom';

function getNameState() {
  return {
    allNames: NameStore.getAll(),
    nameCount: NameStore.getNameCount()
  };
}

//class App extends React.Component {

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
    },

    componentWillUnmount: function() {
        NameStore.removeChangeListener(this._onChange);
    },


    render () {
      return (<div>
            <p> Hello React3!</p>
            <NameList allNames={this.state.allNames} nameCount={this.state.nameCount} />
        </div>
      );
    }
});

React.render(<App/>, document.getElementById('app'));

