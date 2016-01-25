
var React = require('react');
var WebApi = require('../WebApiUtils.jsx');
var j = require('jquery');


var Message = React.createClass({

    getInitialState: function() {
        return {replyOpen: false, replySubmitPending: false, replyText: ""};
    },

    componentDidMount: function() {
    },
    handleReplyClick () {
        console.log("reply clicked");
        this.setState({replyOpen: true, replySubmitFailed: false});
    },
    handleReplyTextChange (event) {
        // the textarea is a "controlled" component, so we are updating our state with each
        // keyboard press.
        console.log(event);
        this.setState({replyText: event.target.value});
    },
    handleSubmit: function(e) {
        e.preventDefault();
        this.setState({replySubmitPending: true, submission: j(e.target)});
        WebApi.submitMessage(j(e.target).serialize())
            .then(function() {
                // submit succeeds -- clear state
                this.setState(
                    {replySubmitPending: false, replySubmitFailed: false, replyOpen:false}
                )}.bind(this)
            )
            .fail(function() {
                // submit fails -- indicate failure, create oppty to submit again.
                this.setState({replySubmitFailed: true, replyOpen: true, replySubmitPending: false})
                }.bind(this)
            )
        ;
    },

    render () {
        var replyhtml = (<div></div>);
        var errortext = "";
        if (this.state.replyOpen) {
            if (this.state.replySubmitFailed) {
                errortext = (<p><b>Submission failed! Try again?</b></p>);
            }
            replyhtml = (<form onSubmit={this.handleSubmit}>
                {errortext}
                <textarea name="text" value={this.state.replyText} placeholder="Reply here..."
                onChange={this.handleReplyTextChange} />
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
            <a href="javascript:void(0)" onClick={this.handleReplyClick}>
                reply
            </a> | {" "}
            <a href="javascript:void(0)">like</a>
            <p></p>
            {replyhtml}
        </div>

      );
    }
});

module.exports=Message;