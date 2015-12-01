'use strict';

var util = require('util');

var BaseController = require('../../../lib/base-controller');

var AddReportController = function AddReportController() {
  BaseController.apply(this, arguments);
};

util.inherits(AddReportController, BaseController);

AddReportController.prototype.saveValues = function saveValues(req, res, callback) {
  var array = req.sessionModel.get('report') || [];
  var data = req.form.values;
  array.push(data);
  this.getNextStep(req, res);
  req.sessionModel.set('report', array);
  req.sessionModel.unset('errorValues');
  callback();
};

module.exports = AddReportController;
