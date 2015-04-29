if (Meteor.isClient) {
	Template.index.helpers({

		posts: function () {
			return Posts.find({}, {sort: {createdAt: -1}});
		}

	});

	Template.index.events({
		"click .delete": function() {
			Meteor.call("deletePost", this._id)
		}
	});
}