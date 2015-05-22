if (Meteor.isClient) {

	Template.layout.events({

		'keydown textarea#new-post': function(event) {
			//console.log("text")
			if (event.which == 13 ) {
				//console.log("13")
				var postContent = document.getElementById('new-post').value;
				if (Meteor.user().emails == undefined) {
					var userEmail = Meteor.user().profile.name
				}else if (Meteor.user().emails != undefined) {
					var userEmail = Meteor.user().emails[0].address					
				};
				var category = document.getElementById('cat').value;
    			Meteor.call("addPost", postContent, userEmail, category);
    			// console.log(postContent);
    			document.getElementById('new-post').value = "";
    			return false;
    		}
		},

		'click a#random': function() {
			//Meteor.myFunctions.random_post()
			if (Session.get("order") == "rand") {
				location.reload(true);
			};
			//console.log("cl")
		}

	});

	Template.layout.helpers({
		error_msg: function () {
			if (Posts.simpleSchema().namedContext().invalidKeys().length != 0) {
				return Posts.simpleSchema().namedContext().invalidKeys()[0].type
			};
		} 
	});



}
