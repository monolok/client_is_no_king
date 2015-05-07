/********
* Routes*
*********/

Router.configure({
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    layoutTemplate: 'layout'
});

Router.route('/', function() {
	this.render('index');
});



// Router.route('/blog'); only work if template is name Blog with B caps

// Router.route('/items/:_id', function () {
//   var item = Items.findOne({_id: this.params._id});
//   this.render('ShowItem', {data: item});
// });
