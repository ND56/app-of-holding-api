// body-parser is used so our API can receive JSON and we
// can parse it; takes the string body and converts to a
// JS object
const bodyParser = require('body-parser')
const express = require('express')

// note that we load in our configured mongoose object; we want
// our promises and connection to our database configured.
const {mongoose} = require('./db/mongoose')
const {User} = require('./models/user')
const {Item} = require('./models/item')

/* --------------------------------------------------- */
/*         Instantiate & Stores our Express App
/* --------------------------------------------------- */

const app = express()

/* --------------------------------------------------- */
/*         Configure Middleware
/* --------------------------------------------------- */

// the return value of this bodyParser.json() is a function
// and that is the middleware that we need to give to express.
// With this in place, we can now send JSON to our Express
// application
app.use(bodyParser.json())

/* --------------------------------------------------- */
/*         Route Handlers
/* --------------------------------------------------- */

app.post('/items', (req, res) => {
  const item = new Item(req.body)

  item.save()
    .then((doc) => {
      console.log(JSON.stringify(doc, null, 2))
      res.send(doc)
    })
    .catch((e) => {
      console.log(JSON.stringify(e, null, 2))
      res.status(400).send(e)
    })
})

/* --------------------------------------------------- */
/*         Causes Express App to Serve
/* --------------------------------------------------- */

app.listen(3000, () => {
  console.log('\n\t**Listening on Port 3000**')
})
