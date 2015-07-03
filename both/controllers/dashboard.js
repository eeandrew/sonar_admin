DashboardController = AppController.extend({
  waitOn: function() {
     Meteor.subscribe('settings');
     Meteor.subscribe('bulletinchannel');
  },
  onAfterAction: function () {
    Meta.setTitle('Dashboard');
  }
});

DashboardController.events({
  'click [data-action=doSomething]': function (event, template) {
    event.preventDefault();
  }
});
