var AppDispatcher = require('./AppDispatcher.jsx');
var j = require('jquery');
var NameConstants = require('./NameConstants.jsx');

var WebApi = {
    getNames: function() {
        j.get('/api/names')
            .done(this._handleAjaxResponse)
            .fail(this._handleAjaxFail);
    },
    _handleAjaxResponse: function(resp) {
        console.log(resp);
        AppDispatcher.dispatch(NameConstants.NAME_ADD, resp);
    },

    _handleAjaxFail: function(resp) {
        console.log("Fail: faking real content returned from server");
        console.log(resp);
        // TODO: for now, pretend it worked... stuff a fake response into the dispatcher
        AppDispatcher.dispatch({actionType: NameConstants.NAME_ADD, data:['bob', 'sally']});

    }
};

module.exports = WebApi;