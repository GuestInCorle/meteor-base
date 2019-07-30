import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';
import {Template} from 'meteor/templating';

import './main.html';

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY',
});

Template.hello.events({
  'click button'() {
    Meteor.call('recreateUser', function () {
      console.log(arguments);
    });
  },
});
