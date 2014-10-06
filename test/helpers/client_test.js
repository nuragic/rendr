// Usage:
// clientTestHelper = require('../helpers/client_test');
// within describe:
//  before(clientTestHelper.before);
//  after(clientTestHelper.after);

global.window = {
  $: require('jquery').create(),
  history: { pushState: function () {;} }
};

var Backbone = require('backbone'),
    BaseView = require('../../shared/base/view');

exports.before = function(){
  this.originalBackbonejQuery = Backbone.$;
  this.originalEnsure = BaseView.prototype._ensureElement;
  this.originalDelegate = BaseView.prototype.delegateEvents;

  BaseView.prototype._ensureElement = Backbone.View.prototype._ensureElement;
  BaseView.prototype.delegateEvents = Backbone.View.prototype.delegateEvents;
}

exports.after = function(){
  Backbone.$ = this.originalBackbonejQuery;
  BaseView.prototype._ensureElement = this.originalEnsure;
  BaseView.prototype.delegateEvents = this.originalDelegate;
}
