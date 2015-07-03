Meteor.publish('bulletinchannel',function(){
	if(this.userId){
		return BulletinChannel.find({})
	}else {
		return [];
	}
});