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
		//console.log("trigger rand");
		random = String(Math.random());
		result = Posts.findOne({"random": {"$gt": random}});
		result_array = [];

		if (result == undefined) {
			result_array.push(Posts.findOne({"random": {"$lt": random}}));
			return result_array
		}else{
			result_array.push(Posts.findOne({"random": {"$gt": random}}));
			return result_array
		}
	}


}

//Meteor.myFunctions.number_of_pages()