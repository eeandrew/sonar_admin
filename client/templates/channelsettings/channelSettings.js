Template.channelSettings.helpers({
	channels : function(){
		return BulletinChannel.find();
	}
});

Template.channelSettings.events({
	'click .save':function(){
		var newchannel = $('#new_channel').val();
		if(newchannel && newchannel.trim().length>0){
			BulletinChannel.insert({channel:newchannel});
			$('#new_channel').val('');
		}
	}
});
