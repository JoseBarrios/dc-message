'use strict'

var assert = require('assert');
var Message = require('../index.js');

var model = {};
let creativeWork = new Message(model);

describe('Message\n', function() {
  describe('Static Methods:', function() {
    describe('Message.isNumber()', function() {
      it('should ...', function() {
        assert.equal(Message.isNumber(1), true);
        assert.equal(Message.isNumber(''), false);
      });
    });
  });
});
