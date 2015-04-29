/**
* Routes
*/

Router.configure({
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    layoutTemplate: 'layout'
});

Router.route('/', function() {
	this.render('index');
});

// Router.route('/blog'); only work if template is name Blog with B caps
