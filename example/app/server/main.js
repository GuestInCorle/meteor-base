import {Meteor} from 'meteor/meteor';

Meteor.methods({
  recreateUser: function () {
    const username = 'lol';

    console.log(`---> trying to delete user with username ${username}`);
    const result = Meteor.users.remove({username});
    console.log(`---> operation result: `);
    console.dir(result);

    // debugger;

    console.log(`---> trying to create user`);
    const id = Accounts.createUser({username, password: 'wow', email: 'lolwow@example.org', profile: {}});
    console.log(`---> user created with id: ${id}`);
  }
});

Meteor.startup(() => {
  // code to run on server at startup
});
