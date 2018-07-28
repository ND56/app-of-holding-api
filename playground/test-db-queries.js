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
