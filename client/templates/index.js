if (Meteor.isClient) {
	Template.index.helpers({

		posts: function () {
			return Posts.find({}, {sort: {voteResult: -1}}); //, limit: 8
			//return Pagination.collection(Posts.find({}).fetch());
		},

		pagination: function() {
	    	//return Pagination.links('/browse', Posts.find({}).count(), {currentPage: Session.get('page'), perPage: 8});
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