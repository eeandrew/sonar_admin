if(Meteor.users.find().count() === 0) {
	Accounts.onCreateUser(function(option,user){
		user.role = option.role;
		return user;
	});
	Accounts.createUser({
		email:'sonar_web_admin@zhongbiao.mobi',
		password:'sonarwebadmin',
		role:'root'
	});
}