const assert = require('assert');
const User = require('../src/user');

describe('Creating a user', () => {
  it('saves a user', () => {
    const dummy = new User({
      email: 'dummy@serene.com',
      password: 'password',
      salt: 'salt'
    })

    dummy.save()
  })
})
