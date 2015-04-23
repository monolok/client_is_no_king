if (Meteor.isClient) {

  // This code runs for the mail form
  Template.Contact.events({
    "click .btn": function(event) {

      var dataContext = {
        name: document.getElementById('name').value,
        text: document.getElementById('message').value
      };

      var html  = Blaze.toHTMLWithData(Template.Mailer, dataContext);

      var options = {
        from: document.getElementById('from').value,
        to: 'antoinebe35@gmail.com',
        subject: 'Mail from meteor app',
        html: html
      };

  Meteor.call('sendEmail', options);

    }
  });

//Template helpers
  Template.Contact.helpers({
    test: "Working"
  });


}