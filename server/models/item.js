const mongoose = require('mongoose')

// model is the method we use in the mongoose library to
// create a new model; first arg is string, second is obj
// that defines the various properties for the model
const Item = mongoose.model('Item', {
  quantity: {
    type: Number,
    // adding a simple "required" validation
    required: true
  },
  name: {
    type: String,
    required: true,
    // adding a length validation means people can't
    // provide an empty string to circumvent this
    minlength: 1,
    // the trim validator gets rid of any white space
    // at the beginning or end of the value
    trim: true
  },
  value: { // assume gold pieces for now
    type: Number
  },
  notes: {
    type: String,
    trim: true,
    // can add default values as well!
    default: 'Nothing of note.'
  },
  weight: { // assume pounds
    type: Number
  },
  category: {
    type: [String],
    trim: true
  }
})

module.exports = {
  Item
}
