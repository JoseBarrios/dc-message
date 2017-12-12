const CreativeWorkDataController = require('dc-creative-work')

class MessageDataController extends CreativeWorkDataController{

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

	get dateRead() { return this.model.dateRead; }
	set dateRead(value) { this.model.dateRead = value; }

	get dateReceived() { return this.model.dateReceived; }
	set dateReceived(value) { this.model.dateReceived = value; }

	get dateSent() { return this.model.dateSent; }
	set dateSent(value) { this.model.dateSent = value; }

	get messageAttachment() { return this.model.messageAttachment; }
	set messageAttachment(value) { this.model.messageAttachment = value; }

	get recipient() { return this.model.recipient; }
	set recipient(value) { this.model.recipient = value; }

	get sender() { return this.model.sender; }
	set sender(value) { this.model.sender = value; }
}

module.exports = MessageDataController;
