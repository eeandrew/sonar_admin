Template.channelItem.events({
	'click .bulletin-channel':function(){
		console.log(this.channel);
		Session.set('current_channel',this.channel);
		Session.set('current_channel_id',this._id);
		$('.modal').openModal();
	},
	'click .confirm' : function(){
		if(Session.get('current_channel_id')){
			BulletinChannel.remove({_id:Session.get('current_channel_id')});
		}
	}
});

Template.channelItem.helpers({
	current_channel:function(){
		return Session.get('current_channel');
	}
});