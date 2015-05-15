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
		max: 140
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

	random: {
		type: String
	},

	user_id: {
		type: String
	},

	user_involved: {
		type: [String]
	},

	createdAt: {
		type: Date
	}
});

Posts.attachSchema(Schema.Post);
// In your server code: define a method that the client can call
Meteor.methods({

	addPost: function(text, email) {
		Posts.insert({
			text: text,
			email: email,
			voteUp: 0,
			voteDown: 0,
			voteResult: 0,
			random: Math.random(),
			user_id: Meteor.userId(),
			user_involved: [" "],
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

	user_has_voted: function(postId, user_id) {
		//console.log(postId);
		//console.log(user_id);
		Posts.update(postId, {$addToSet: {user_involved: user_id}});
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



