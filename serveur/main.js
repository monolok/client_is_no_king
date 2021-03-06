console.log("App starting...");
/**
* Models
*/
Posts = new Meteor.Collection('posts');
/**
* Validation Schema
*/
Schema = {};

Schema.Post = new SimpleSchema({
	text: {
		type: String,
		label: "Text",
		max: 240
	},

	email: {
		type: String
	},

	voteUp: {
		type: Number
	},

	voteDown: {
		type: Number
	},

	voteResult: {
		type: Number
	},

	category: {
		type: String
	},

	random: {
		type: String
	},

	user_id: {
		type: String
	},

	user_involved_up: {
		type: [String]
	},

	user_involved_down: {
		type: [String]
	},

	createdAt: {
		type: Date
	}
});

Posts.attachSchema(Schema.Post);
// In your server code: define a method that the client can call
Meteor.methods({

	addPost: function(text, email, category) {
		Posts.insert({
			text: text,
			email: email,
			voteUp: 0,
			voteDown: 0,
			voteResult: 0,
			category: category,
			random: Math.random(),
			user_id: Meteor.userId(),
			user_involved_up: [" "],
			user_involved_down: [" "],
			createdAt: new Date()
		}, function(error, result) {
  //The update will fail, error will be set,
  //and result will be undefined or false because "copies" is required.
  //
  //The list of errors is available on `error.invalidKeys` or by calling Books.simpleSchema().namedContext().invalidKeys()
		});

		//function(error, result){
			//console.log(error)
		//});

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
	},

	user_has_voted_up: function(postId, user_id) {
		//console.log(postId);
		//console.log(user_id);
		Posts.update(postId, {$addToSet: {user_involved_up: user_id}});
	},

	user_has_voted_down: function(postId, user_id) {
		Posts.update(postId, {$addToSet: {user_involved_down: user_id}});
	},

	remove_id_from_array_up: function(postId, user_id) {
		Posts.update(postId, {$pull: {user_involved_up: user_id}});
	},

	remove_id_from_array_down: function(postId, user_id) {
		Posts.update(postId, {$pull: {user_involved_down: user_id}});
	}

});

// Publish code so that it can be subscribed on the client side
Meteor.publish("posts", function () {
	return Posts.find({});  //, limit: 8
});

// Meteor.publish("posts_recent", function (current_page) {
// 	var activePage = parseInt(current_page)
// 	//figure out limit with activePage
// 	return Posts.find({}, {limit: limit});
// });



