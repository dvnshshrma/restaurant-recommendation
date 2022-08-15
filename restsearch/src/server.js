const express = require('express')
const bodyParser= require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb+srv://test-user:HV2oAv3V4ATm2AC3@cluster0.c7ive.mongodb.net/?retryWrites=true&w=majority')
.then(client => {
    console.log('Connected to Database')
    const db = client.db('restaurant-recommendation')
    const quotesCollection = db.collection('feed')

    // Make sure you place body-parser before your CRUD handlers!
	app.use(bodyParser.urlencoded({ extended: true }))

	app.listen(3000, function() {
	  console.log('listening on 3000')
	})

	app.get('/', (req, res) => {
	  res.sendFile(__dirname + '/index.html')
	  // Note: __dirname is the current directory you're in. Try logging it and see what you get!
	  // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
	})

	app.post('/quotes', (req, res) => {
	  console.log('/quotes!')
	  console.log(req.body)

	  quotesCollection.insertOne(req.body)
	    .then(result => {
	      console.log(result)

	      res.redirect('/')
	    })
	    .catch(error => console.error(error))

	})
  })
  .catch(error => console.error(error))