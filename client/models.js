/**
* Models
*/

//Messages = new Meteor.Collection('messages');

/**
* Routes
*/

Router.configure({
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    layoutTemplate: 'layout'
});

Router.route('/', function() {
	this.render('Index');
});

// Router.route('/blog');
// Router.route('/contact');