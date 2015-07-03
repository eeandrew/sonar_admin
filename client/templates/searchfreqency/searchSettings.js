Template.searchSettings.helpers({
	'max_search_frequency' : function() {
		var settings = Settings.findOne();
		if(settings){
			return settings.max_search_frequency;
		}
	},
	'editMode': function() {
		return Session.get('max_search_frequency_status');
	}
});

Template.searchSettings.events({
	'click #edit' : function() {
		Session.set('max_search_frequency_status',true);
	},
	'click #save' : function() {
		var max_search_frequency = parseInt($('#max_search_frequency').val());
		if(max_search_frequency && max_search_frequency>0){
			Settings.update({_id:Settings.findOne()._id},{$set:{max_search_frequency:max_search_frequency}});
			Session.set('max_search_frequency_status',false);
		}else{

		}
	},
	'click #cancel' : function(){
		Session.set('max_search_frequency_status',false);
	}
});