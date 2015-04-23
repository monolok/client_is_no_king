//meteor add wylio:mandrill
if (Meteor.isServer) {
Meteor.startup(function() {
    return Meteor.Mandrill.config({
        username: USERNAME_MAIL,
        key: KEY_MAIL
    });
});

}

// In your server code: define a method that the client can call
Meteor.methods({
  sendEmail: function (options) {
    //check([to, from, name, text], [String]);

    // Let other method calls from the same client start running,
    // without waiting for the email sending to complete.
    //this.unblock();
    if (Meteor.isServer) {
        return Meteor.Mandrill.send(options);
	    // return Meteor.Mandrill.send({
	    //     to: to,
	    //     from: from,
	    //     name: name,
	    //     text: text
     //        //html: html
	    // });
	}
  }
});