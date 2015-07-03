
Router.route('/',{
	name: 'dashboard',
	controller:'DashboardController'
});



Router.plugin('ensureSignedIn', {
});
