//meteor add wylio:mandrill
if (Meteor.isServer) {
Meteor.startup(function() {
    return Meteor.Mandrill.config({
        username: "antoinebe35@gmail.com",
        key: "vr9Q2AfXxFXbJ8Io1ydKYw"
    });
});

}

// In your server code: define a method that the client can call
Meteor.methods({
  sendEmail: function (to, from, name, text) {
    //check([to, from, name, text], [String]);

    // Let other method calls from the same client start running,
    // without waiting for the email sending to complete.
    //this.unblock();
    if (Meteor.isServer) {
	    return Meteor.Mandrill.send({
	        to: to,
	        from: from,
	        name: name,
	        text: text
	    });
	}
  }
});