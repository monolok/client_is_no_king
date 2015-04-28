if (Meteor.isClient) {

	Template.layout.events = {

		'keydown textarea#new-post': function(event) {
			if (event.which == 13 ) {
    			console.log(event.type);
    		} else {
    			console.log("else");
    		}
		}



	};



}