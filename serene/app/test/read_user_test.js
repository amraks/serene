const assert = require('assert');
const User = require('../src/user');

describe('Reading users out of the database', () => {
  let dummy;

  beforeEach((done) => {
    dummy = new User({
      email: 'dummy@serene.com',
      password: 'password',
      salt: 'salt'
    });

    dummy.save()
      .then(() => done());
  });

  it('finds all users with a name of dummy', (done) => {
    User.find({ email: 'dummy@serene.com' })
      .then((users) => {
        assert(users[0]._id.toString() === dummy._id.toString());
        done();
      });
  });
});
