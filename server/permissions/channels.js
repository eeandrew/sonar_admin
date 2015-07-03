BulletinChannel.allow({
	'insert':function(userId,doc) {
		if(userId) {
			var currentUser = Meteor.users.findOne({_id:userId});
			if(currentUser && currentUser.role === 'root'){
				return true;
			}
		}
		return false;
	},
	'update' : function(userId,doc){
		if(userId) {
			var currentUser = Meteor.users.findOne({_id:userId});
			if(currentUser && currentUser.role === 'root'){
				return true;
			}
		}
		return false;
	},
	'remove' : function(userId,doc) {
		if(userId) {
			var currentUser = Meteor.users.findOne({_id:userId});
			if(currentUser && currentUser.role === 'root'){
				return true;
			}
		}
		return false;
	}
})