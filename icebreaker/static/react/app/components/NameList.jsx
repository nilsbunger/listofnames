
var React = require('react');


var NameList = React.createClass({

   render () {
      return (
        <div>
            <ul>
            {this.props.allNames.map(function(name) {
                return <li key={name.id}>{name.the_name}</li>;})
            }
            </ul>
            <p>There are a total of {this.props.nameCount} names</p>
        </div>
      );
    }
});

module.exports=NameList;