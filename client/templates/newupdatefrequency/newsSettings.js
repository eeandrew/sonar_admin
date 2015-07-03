Template.newsSettings.helpers({
	'news_update_interval':function(){
		var settings = Settings.findOne();
		if(settings){
			return settings.news_update_interval;
		}
	},
	'editMode': function() {
		return Session.get('news_update_interval_status');
	}
});

Template.newsSettings.events({
	'click #edit' : function() {
		Session.set('news_update_interval_status',true);
	},
	'click #cancel' : function(){
		Session.set('news_update_interval_status',false);
	},
	'click #save' : function() {
		var news_update_interval = parseInt($('#news_update_interval').val());
		if(news_update_interval && news_update_interval>0){
			Settings.update({_id:Settings.findOne()._id},{$set:{news_update_interval:news_update_interval}});
			Session.set('news_update_interval_status',false);
		}else{

		}
	}
});