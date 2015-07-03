if(Meteor.users.find().count() === 0) {
	Accounts.onCreateUser(function(option,user){
		user.role = option.role;
		return user;
	});
	Accounts.createUser({
		email:'admin@zb.com',
		password:'passwd',
		role:'root'
	});
}