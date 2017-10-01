const assert = require('assert');
const User = require('../src/user');

describe('Creating a user', () => {
  it('saves a user', (done) => {
    const dummy = new User({
      email: 'dummy@serene.com',
      password: 'password',
      salt: 'salt'
    })

    dummy.save()
      .then(() => {
        assert(!dummy.isNew);
        done();
      })
  })
})
