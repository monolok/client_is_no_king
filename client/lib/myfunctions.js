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
	}




}

//Meteor.myFunctions.number_of_pages()