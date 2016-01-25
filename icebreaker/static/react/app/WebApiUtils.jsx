var AppDispatcher = require('./AppDispatcher.jsx');
var j = require('jquery');
var NameConstants = require('./NameConstants.jsx');

var WebApi = {
    getNames: function() {
        WebApi.makeAjaxCall('/names/', NameConstants.NAME_ADD);
    },
    getMessages: function() {
        WebApi.makeAjaxCall('/messages/', NameConstants.MESSAGES_ADD);
    },
    submitMessage: function(msg) {
        // return a promise
        var _handleSubmitFail = function(resp) {
            console.log("Fail post");
            console.log(resp);
        }
        var _handleSubmitResponse = function(resp) {
            console.log("Submit response:");
            console.log(resp);
            WebApi.getMessages();   // reload messages from server (very inefficient, but good for
                                    // now.
        }
        return j.ajax({
            type:"POST",
            url: '/messages/',
            data: msg,
            headers: {
                'Authorization': "Basic " + btoa("admin:123456789r")
            },
            success: function() {
            }
        })
            .done(_handleSubmitResponse)
            .fail(_handleSubmitFail);
    },
    makeAjaxCall: function(url, actionType) {
        var _handleAjaxResponse = function(resp) {
            AppDispatcher.dispatch({actionType: actionType, data: resp["results"] });
        };

        var _handleAjaxFail = function(resp) {
            console.log("Fail GET:");
            console.log(resp);

        }
        j.ajax({
            type:"GET",
            url: url,
            headers: {
                'Authorization': "Basic " + btoa("admin:123456789r")
            },
            success: function() {
            }
        })
            .done(_handleAjaxResponse)
            .fail(_handleAjaxFail);
    }

};

module.exports = WebApi;
