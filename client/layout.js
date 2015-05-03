if (Meteor.isClient) {

	Template.layout.events({

		'keydown textarea#new-post': function(event) {
			if (event.which == 13 ) {
				var postContent = document.getElementById('new-post').value;
				var userEmail = Meteor.user().emails[0].address
    			Meteor.call("addPost", postContent, userEmail);
    			// console.log(postContent);
    			document.getElementById('new-post').value = "";
    			return false;
    		}
		}

	});



}
