var productseed = [

  {
    "name": "poll1",
    "question" : "to be or not to be",
    "polls": {
      "poll1" : {"text":"to be" , "votes": 0} ,
      "poll2" : {"text":"not to be" , "votes": 0}

    }
  },

  {
    "name": "poll2",
    "question" : "to be or not to be 2",
    "polls": {
      "poll1" : {"text":"to be 2" , "votes": 0} ,
      "poll2" : {"text":"not to be 2" , "votes": 0}

    }
  },

  {
    "name": "poll3",
    "question" : "to be or not to be 3",
    "polls": {
      "poll1" : {"text":"to be 3" , "votes": 0} ,
      "poll2" : {"text":"not to be 3" , "votes": 0}

    }
  },




];

if(Polls.find().count() === 0){
  _.each(productseed , function(product){
    Polls.insert(product);
    console.log("inserted" , product.name);
  })
}

if(Meteor.users.find().count() === 0){
  var id = Accounts.createUser({
    username : "admin",
    email : "admin@test.com",
    password: "admin123",
    profile : {name:"big"},
    roles : []
  });
  Roles.addUsersToRoles(id , ["Administrator"]);
  console.log("admin added!!");
}
