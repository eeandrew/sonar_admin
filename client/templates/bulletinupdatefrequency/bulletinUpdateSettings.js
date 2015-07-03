Template.bulletinSettings.helpers({
	'bulletin_update_interval':function(){
		var settings = Settings.findOne();
		if(settings){
			return settings.bulletin_update_interval;
		}
	},
	'editMode': function() {
		return Session.get('bulletin_update_interval_status');
	}
});

Template.bulletinSettings.events({
	'click #edit' : function() {
		Session.set('bulletin_update_interval_status',true);
	},
	'click #cancel' : function(){
		Session.set('bulletin_update_interval_status',false);
	},
	'click #save' : function() {
		var bulletin_update_interval = parseInt($('#bulletin_update_interval').val());
		if(bulletin_update_interval && bulletin_update_interval>0){
			Settings.update({_id:Settings.findOne()._id},{$set:{bulletin_update_interval:bulletin_update_interval}});
			Session.set('bulletin_update_interval_status',false);
		}else{

		}
	}
});