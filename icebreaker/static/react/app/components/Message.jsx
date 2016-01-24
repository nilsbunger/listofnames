
var React = require('react');
var WebApi = require('../WebApiUtils.jsx');
var j = require('jquery');


var Message = React.createClass({

    getInitialState: function() {
        return {replyOpen: false, replySubmitPending: false};
    },


    componentDidMount: function() {
//        this.state.replyOpen = false;
    },
    handleReplyClick () {
        console.log("reply clicked");
        this.setState({replyOpen: true});
    },
    handleReplyText (event) {
        console.log(event);
    },
    handleSubmit: function(e) {
        e.preventDefault();
        WebApi.submitMessage(j(e.target).serialize());
        this.setState({replySubmitPending: true});
    },

    render () {
        var replyhtml = (<div></div>);
        if (this.state.replyOpen) {
//        if (true) {
            replyhtml = (<form onSubmit={this.handleSubmit}>
                <textarea name="text" defaultValue="Enter reply here..."
                onChange={this.handleReplyText} />
                <input type="text" hidden="true" name="in_reply_to" value={null} />
                <input type="submit" value="Post" />
            </form>);

        }
        if (this.state.replySubmitPending) {
            replyhtml = (<p>Submitting...</p>)
        }
      return (
        <div style={{borderStyle:"solid"}}>
            <p>{this.props.msg.text}</p>
            <b />
            <a href="#" onClick={this.handleReplyClick}>reply</a> | <a href="#">like</a>
            <p></p>
            {replyhtml}
        </div>

      );
    }
});

module.exports=Message;