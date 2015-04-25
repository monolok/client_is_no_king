console.log("App starting...");

//meteor add wylio:mandrill
if (Meteor.isServer) {
console.log("Mail config...");  
Meteor.startup(function() {
    return Meteor.Mandrill.config({
        username: Meteor.settings.username_mail,
        key: Meteor.settings.key_mail
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

