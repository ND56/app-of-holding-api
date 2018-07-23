// root of the application
// when I want to start up the node app, I'm going to be
// running this file.

/* --------------------------------------------------- */
/*         Configure Mongoose
/* --------------------------------------------------- */

// load in mongoose
const mongoose = require('mongoose')

// tell mongoose which promise library to use
mongoose.Promise = global.Promise

// now we need to connect to the database;
// we pass the url for the DB server and we pass the
// name of the database (note: doesn't need to have been
// created yet)
// NOTE: "mongodb" is the protocol -> look this up
// NOTE: this conenction would take a few milliseconds; one
// good thing about mongoose is we don't need to micromanage;
// mongoose won't run subsequent DB queries until this
// connection resolves
// NOTE: originally the text between the slashes was
// localhost:27017, but that didn't work, so I replaced
// with the below. I've encountered this before, the numbers
// I have below deifnitely represent my local host. There's
// some issue here I should look up at some point.
mongoose.connect('mongodb://127.0.0.1:27017/app-of-holding')

/* --------------------------------------------------- */
/*         Define Item Mongoose Model
/* --------------------------------------------------- */

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
    type: String,
    trim: true
  }
})

/* --------------------------------------------------- */
/*         Define User Mongoose Model
/* --------------------------------------------------- */

const User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  }
})

/* --------------------------------------------------- */
/*         Test DB Queries
/* --------------------------------------------------- */

// run the item constructor that we created above
// const newItem = new Item({
//   quantity: 1,
//   name: 'Scimitar',
//   value: 25,
//   notes: 'Picked up off goblin\'s corpse.',
//   weight: 3,
//   category: 'Weapon'
// })

// save returns a promise
// on a successful save, you get the saved "document" returned
// newItem.save().then((newDoc) => {
//   console.log(newDoc)
// }, (errorResp) => {
//   console.log(errorResp)
// })

// NOTE: the object that's created has a property called "__v";
// mongoose keeps track of the version of the model you're
// working with --> this is represented by this property.

// NOTE:  mongoose automatically takes our Item model and
// converts to a collection by pluralizing and lower-casing;
// we now have a collection called "items"

// const newUser = new User({
//   email: 'ndrew56@gmail.com'
// })
//
// newUser.save().then(doc => console.log(doc), err => console.log(err))
