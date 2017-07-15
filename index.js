const CreativeWork = require('@josebarrios/creative-work')

class Message extends CreativeWork{

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

  get recipient() { return this.computed.recipient; }
  set recipient(value) { this.computed.recipient = value; }

  get sender() { return this.computed.sender; }
  set sender(value) { this.computed.sender = value; }
}

module.exports = Message;
