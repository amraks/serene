const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo/user_test');
mongoose.connection
  .once('open', () => {
    console.log('DB connection established')
  })
  .on('error', (error) => {
    console.warn('Warning', error);
  });

beforeEach((done) => {
  mongoose.connection.collections.users.drop(() => {
    done();
  });
});
