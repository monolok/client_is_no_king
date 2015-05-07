if (Meteor.isClient) {

	Meteor.subscribe("posts");

	Template.index.helpers({

		posts: function () {
			return Posts.find({}, {sort: {voteResult: -1}});
			//return Pagination.collection(Posts.find({}).fetch());
		},

		// pagination: function() {
	 //    	//return Pagination.links('/browse', Posts.find({}).count(), {currentPage: Session.get('page'), perPage: 8});
		// }

		number_of_pages: function () {
			var page_count = (Posts.find().count())/12;
			var pages = new Array();
			var i = 0;
			while (i < page_count ) {
				pages.push(i);
				i++;
			}
			return pages
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