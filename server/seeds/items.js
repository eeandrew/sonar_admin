Meteor.startup(function() {

  Factory.define('settings', Settings, {
    max_search_frequency: 30,
    bulletin_update_interval: 30,
    news_update_interval: 30
  });

  if (Settings.find({}).count() === 0) {

    _(1).times(function(n) {
      Factory.create('settings');
    });

  }

});
