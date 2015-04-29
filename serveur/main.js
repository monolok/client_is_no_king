console.log("App starting...");
/**
* Models
*/
Posts = new Meteor.Collection('posts');

// In your server code: define a method that the client can call
Meteor.methods({

	addPost: function(text) {
		Posts.insert({
			text: text,
			createdAt: new Date()
		});
	},

	deletePost: function(postId) {
		Posts.remove(postId);
	}


});

