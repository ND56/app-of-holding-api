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
mongoose.connect('mongodb://127.0.0.1:27017/app-of-holding',
  { useNewUrlParser: true }
)

module.exports = {
  mongoose
}
