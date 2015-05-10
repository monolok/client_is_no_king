Meteor.myFunctions = {

	number_of_pages: function () {
		var page_count = (Posts.find().count())/12;
		var pages = new Array();
		var i = 0;
		while (i < page_count ) {
			pages.push(i);
			i++;
		}
		return pages
	},

	random_post: function () {
		random = Math.random();
		result = Posts.find({"random": {"$gt": random}}, {limit: 1})

		if (result.fetch().length == 0) {
			return Posts.find({"random": {"$lt": random}}, {limit: 1})
		}else{
			return result
		}
	}


}

//Meteor.myFunctions.number_of_pages()