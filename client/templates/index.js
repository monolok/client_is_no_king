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

			if (Session.get("order") == "worst") {
				return Posts.find({}, {sort: {voteResult: 1}, limit: limit, skip: skip})

			}else if (Session.get("order") == "rand") {
				return Meteor.myFunctions.random_post()
				// random = Math.random();
				// result = Posts.find({"random": {"$gt": random}}, {limit: 1})
				// if (result.fetch().length == 0) {
				// 	//console.log(result.fetch())
				// 	return Posts.find({"random": {"$lt": random}}, {limit: 1})
				// }else{
				// 	//console.log(result.fetch())
				// 	return result
				// };

			}else if(Session.get("order") == "best"){
				return Posts.find({}, {sort: {voteResult: -1}, limit: limit, skip: skip})

			}else if(Session.get("order") == "newest") {
				return Posts.find({}, {sort: {createdAt: -1}, limit: limit, skip: skip})

			}else{
				return Posts.find({}, {sort: {voteResult: -1}, limit: limit, skip: skip})
			};			

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