if (Meteor.isClient) {

	Template.layout.events({

		'keydown textarea#new-post': function(event) {
			if (event.which == 13 ) {
				var postContent = document.getElementById('new-post').value;
    			Meteor.call("addPost", postContent);
    			// console.log(postContent);
    			document.getElementById('new-post').value = "";
    			return false;
    		}
		}



	});



}