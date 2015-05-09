if (Meteor.isClient) {
// var current_page = Session.get("current_page");

// if (current_page) {
// 	Meteor.subscribe("posts_recent", current_page);	
// };


Template.test.helpers({
	posts: function() {
		return Posts.find({})
	}
});

}


// posts: function() {
// 	current_page = Session.get("current_page");
// 	if (current_page == 1) {
// 		return Posts.find({}, {limit: 12})
// 	}else if (current_page == 2) {
// 		return Posts.find({}, {limit: 20})
// 	}else if (current_page == 4) {
// 		window.location = "/"
// 	}
// 	//return Session.get("current_page");
// }

// switch (new Date().getDay()) {
//     case 0:
//         day = "Sunday";
//         break;
//     case 1:
//         day = "Monday";
//         break;
//     case 2:
//         day = "Tuesday";
//         break;
//     case 3:
//         day = "Wednesday";
//         break;
//     case 4:
//         day = "Thursday";
//         break;
//     case 5:
//         day = "Friday";
//         break;
//     case 6:
//         day = "Saturday";
//         break;
// }