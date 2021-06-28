const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_ENDPOINT || 'mongodb://localhost/databaseName',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

module.exports = mongoose.connection;
