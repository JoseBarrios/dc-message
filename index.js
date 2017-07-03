const Thing = require('@josebarrios/thing')
const CreativeWork = require('@josebarrios/creative-work')
const Multiple = require('aggregation/es6');

class Message extends Multiple(Thing, CreativeWork){

    constructor(model){
      model = model || {};
      super(model)

      this.dateRead = model.dateRead;
      this.dateReceived = model.dateReceived;
      this.dateSent = model.dateSent;
      this.messageAttachment = model.messageAttachment;
      this.recipient = model.recipient;
      this.sender = model.sender;
    }

  get dateRead() { return this.computed.dateRead; }
  set dateRead(value) { this.computed.dateRead = value; }

  get dateReceived() { return this.computed.dateReceived; }
  set dateReceived(value) { this.computed.dateReceived = value; }

  get dateSent() { return this.computed.dateSent; }
  set dateSent(value) { this.computed.dateSent = value; }

  get messageAttachment() { return this.computed.messageAttachment; }
  set messageAttachment(value) { this.computed.messageAttachment = value; }

  get dateSent() { return this.computed.dateSent; }
  set dateSent(value) { this.computed.dateSent = value; }

  get dateReceived() { return this.computed.dateReceived; }
  set dateReceived(value) { this.computed.dateReceived = value; }

  get dateRead() { return this.computed.dateRead; }
  set dateRead(value) { this.computed.dateRead = value; }
}

module.exports = Message;
