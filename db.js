const mongodb = require('mongodb');

const connectionString = 'mongodb+srv://dai123:dai123@todolist-ven11.mongodb.net/ComplexApp?retryWrites=true';

mongodb.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, client) {
  module.exports =  client.db();
  const app = require('./app');
  app.listen(3000);
});