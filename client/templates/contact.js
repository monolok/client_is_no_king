if (Meteor.isClient) {
  // This code only runs on the client
  Template.Contact.events({
    "click .btn": function(event) {
      var from  = document.getElementById('from').value; 
      var name  = document.getElementById('name').value;
      var text  = document.getElementById('message').value;

  Meteor.call('sendEmail', 'antoinebe35@gmail.com', from, name, text);

    }
  });

  Template.Contact.helpers({
    test: "Working"
  });


}