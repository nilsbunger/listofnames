var AppDispatcher = require('./AppDispatcher.jsx');
var j = require('jquery');
var NameConstants = require('./NameConstants.jsx');

var WebApi = {
    getNames: function() {
        j.ajax({
            type:"GET", 
            url: "/names/", 
            headers: {
                'Authorization': "Basic " + btoa("admin:123456789r")
            },
            success: function() {
            }
        })
            .done(this._handleAjaxResponse)
            .fail(this._handleAjaxFail);
    },
    _handleAjaxResponse: function(resp) {
        console.log(resp);
        var name_list = [];
        for ( var i=0 ; i < resp["results"].length; i++) {
            name_list.push(resp["results"][i]["the_name"]);
        }
        console.log(name_list);
        AppDispatcher.dispatch({actionType: NameConstants.NAME_ADD, data: name_list });
    },

    _handleAjaxFail: function(resp) {
        console.log("Fail: faking real content returned from server");
        console.log(resp);
        // TODO: for now, pretend it worked... stuff a fake response into the dispatcher
        AppDispatcher.dispatch({actionType: NameConstants.NAME_ADD, data:['bob', 'sally']});

    }
};

module.exports = WebApi;
