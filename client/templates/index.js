if (Meteor.isClient) {

	Meteor.subscribe("posts");

	Template.index.helpers({

		posts: function () {
			if (Session.get("current_page") == undefined) {
				limit = 12;
				skip = 0;
			} else {
				var multi = parseInt(Session.get("current_page"))
				limit = 12;
				skip = 12*multi;
			}			

			return Posts.find({}, {sort: {voteResult: -1}, limit: limit, skip: skip});
		},

		number_of_pages: function () {
			var page_count = (Posts.find().count())/12;
			var pages = new Array();
			var i = 1;
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