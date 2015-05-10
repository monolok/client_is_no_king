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

// Router.route('/posts/:page', function () {
//   var posts = Posts.find({}, {page: this});
//   this.render('ShowItem', {data: posts});
// });

// Router.route('/blog'); only work if template is name Blog with B caps

// Router.route('/posts/:page', function () {
//   var pageId = this.params.page;
//   ...
// });

// Router.route('/posts/:page', function () {
// 	var pageId = this.params.page;
// 	//console.log(pageId);
// 	//item = Session.set("page", pageId);
//   	//var item = Posts.findOne({_id: this.params.page}); //X4S2QRxTxzLkzEbgR
//   	var item = Posts.find({});
//   	this.render('test', {data: item});
// });

Router.route('/:page', function () {
  	this.render('index', {data: function(){
  		var pageId = this.params.page;
  		//console.log(pageId);
  		Session.set("current_page", pageId);
  	}
  });
});

// Router.route('/worst', function () {
//     this.render('index', {data: function(){
//       console.log("worst");
//     }
//   });
// });