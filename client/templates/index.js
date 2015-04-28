if (Meteor.isClient) {
	Template.index.helpers({
		posts: function () {
			return Post.find();
		}
	});
}