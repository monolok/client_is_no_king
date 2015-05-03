if (Meteor.isClient) {
	Template.index.helpers({

		posts: function () {
			return Posts.find({}, {sort: {voteResult: -1}, limit: 8});
		}

	});

	Template.index.events({

		"click .delete": function() {
			Meteor.call("deletePost", this._id);
		},

		"click .vote-up": function() {
			Meteor.call("voteUp", this._id);
			Meteor.call("voteResult", this._id);
		},

		"click .vote-down": function() {
			Meteor.call("voteDown", this._id);
			Meteor.call("voteResult", this._id);
		}

	});
}