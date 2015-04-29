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
			voteUp: 0,
			voteDown: 0,
			voteResult: 0,
			createdAt: new Date()
		});
	},

	deletePost: function(postId) {
		Posts.remove(postId);
	},

	voteUp: function(postId) {
		Posts.update(postId, {$inc: {voteUp: 1} });
	},

	voteDown: function(postId) {
		Posts.update(postId, {$inc: {voteDown: -1} });
	},

	voteResult: function(postId) {
		var post = Posts.findOne(postId);
		var result = post.voteUp + post.voteDown;
		Posts.update(postId, {$set: {voteResult: result} });
	}

});

