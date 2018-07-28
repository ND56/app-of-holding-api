// note that unlike in the server.js file, where we want our
// configured mongoose object, it's fine to just load in the
// regular mongoose library here.
const mongoose = require('mongoose')

const User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  }
})

module.exports = {
  User
}
