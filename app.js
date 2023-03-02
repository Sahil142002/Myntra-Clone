MongoClient.connect("mongodb://localhost:27017/exampleDb", function(err, db) {
  if(err) { return console.dir(err); }

  db.createCollection('users', function(err, collection) {});

  //Do all server/database operations in here

});