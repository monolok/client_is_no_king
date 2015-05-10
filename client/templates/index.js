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
			// var page_count = (Posts.find().count())/12;
			// var pages = new Array();
			// var i = 1;
			// while (i < page_count ) {
			// 	pages.push(i);
			// 	i++;
			// }
			// return pages
			return Meteor.myFunctions.number_of_pages()
		},

		page_before: function () {
			//console.log(Meteor.myFunctions.number_of_pages());
			if (Session.get("current_page") == undefined) {
				var page_before = 0;
			}else if (Session.get("current_page") == "0") {
				var page_before = 0;
			}else{
				var page = parseInt(Session.get("current_page"));
				var page_before = page - 1;
			};
			return page_before
		},

		page_after: function () {
			var last_page = Meteor.myFunctions.number_of_pages()[Meteor.myFunctions.number_of_pages().length - 1] 
			if (Session.get("current_page") == undefined) {
				var page_after = 1;
			}else if (parseInt(Session.get("current_page")) == last_page) {
				var page_after = 0;
			}else{
				var page = parseInt(Session.get("current_page"));
				var page_after = page + 1;
			};
			return page_after			
		},

		active: function () {
			//document.getElementsByClassName("on_page")
			//console.log(this);
			if (parseInt(Session.get("current_page")) == this) {
				return true
			};

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