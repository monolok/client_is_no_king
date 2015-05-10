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

Router.route('/:page', function () {
  	this.render('index', {data: function(){
  		var pageId = this.params.page;
  		//console.log(pageId);
  		Session.set("current_page", pageId);
  	}
  });
});

Router.route('/posts/:order', function () {
    this.render('index', {
      data: function(){
        var order = this.params.order;
        Session.set("order", order);
    }
  });
});