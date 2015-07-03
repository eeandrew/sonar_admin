Router.route('/', {
  name: 'home'
});



Router.route('/items/new', {
  name: 'items.new'
});


Router.route('dashboard',{
	name: 'dashboard'
});

Router.route('configure',{
	name: 'configure'
});


// Router.plugin('ensureSignedIn', {
//   only: ['dashboard']
// });
