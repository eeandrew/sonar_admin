Settings.allow({
	'insert': function(userId,doc) {
		return false;
	},
	'update': function(userId,doc,fields,modifier) {
		//Todo
		if(userId) {
			var currentUser = Meteor.users.findOne({_id:userId});
			if(currentUser && currentUser.role === 'root'){
				return true;
			}
		}
		return false;
	},
	'remove': function(userId,doc) {
		return false;
	}
});