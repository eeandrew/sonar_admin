DashboardController = AppController.extend({
  waitOn: function() {
    return Meteor.subscribe('settings');
  },
  data: {
    settings: Settings.findOne({})
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
