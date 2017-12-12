'use strict'

var assert = require('assert');
var MessageDataController = require('../index.js');

var model = {};
let creativeWork = new MessageDataController(model);

describe('MessageDataController\n', function() {
  describe('Static Methods:', function() {
    describe('MessageDataController.isNumber()', function() {
      it('should ...', function() {
        assert.equal(MessageDataController.isNumber(1), true);
        assert.equal(MessageDataController.isNumber(''), false);
      });
    });
  });
});
