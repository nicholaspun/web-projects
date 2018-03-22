// NOTE: Use Nodemon so that you don't have to restart the server everytime
//       you make a change!

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path'); // core module
var expressValidator = require('express-validator');
var mongojs = require("mongojs"); // connects to database
var db = mongojs('learnExpressJs', ['users']);
var ObjectId = mongojs.ObjectId;


var app = express();

// This is a middleware!
// NOTE: ORDER MATTERS --> if this were after the get statement
//       it would NOT run!
/*
var logger = function(req, res, next) {
  console.log("Logging...");
  next();
}
app.use(logger);
*/

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Body Parser Middleware
app.use(bodyParser.json()); // handles json content
app.use(bodyParser.urlencoded({extended: false}));


// Global Variables Middleware
app.use(function(req, res, next) {
  res.locals.errors = null;
  next()
})

// Set Static Path - This will be where html/css files go
// path.join(dirname, FOLDER)
app.use(express.static(path.join(__dirname, 'public')));

// Express Validator Middleware
// In this example, the formParam value is going to get morphed into form body format useful for printing.
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

/* (unncessary since we have db)
var users = [
  {
    id: 1,
    first_name: 'Jeff',
    last_name: "Doe",
    email: "jDoe@gmail.com",
  },
  {
    id: 2,
    first_name: 'Bob',
    last_name: "Smith",
    email: "bBob@gmail.com",
  },
  {
    id: 3,
    first_name: 'Jill',
    last_name: "Jackson",
    email: "jjackson@gmail.com",
  },
]
*/

app.get("/", function(req, res) {
  db.users.find(function (err, docs) {
    res.render('index', {
      title: "Customers",
      users: docs // from database
    });
  });
});

app.post('/users/add', function(req, res) {
  // Rules:
  req.checkBody('first_name', "First Name is Required").notEmpty();
  req.checkBody('last_name', "Last Name is Required").notEmpty();
  req.checkBody('email', "Email is Required").notEmpty();

  var errors = req.validationErrors();

  // check if there are errors
  if (errors) {
    res.render('index', {
      title: "Customers",
      users: docs,
      errors: errors
    });
  } else {
    var newUser = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
    }
    db.users.insert(newUser, function(err, result) {
      if (err) {
        console.log(err);
      }
      res.redirect('/');
    });
  }
});

app.delete('/users/delete/:id', function(req, res) {
  db.users.remove({_id: ObjectId(req.params.id)}, function(err) {
    if (err) {
      console.log(err);
    }
    res.redirect('/');
  })
})

app.listen(3000, function() {
  console.log("Server started on Port 3000 ...");
})

/* (Example of sending json)
var people = [
  {
    name: 'Jeff',
    age: 30
  },
  {
    name: 'Sara',
    age: 15
  },
  {
    name: 'Jim',
    age: 60
  },
]

app.get("/", function(request, response) { // '/' is the homepage
  response.json(people) // parse json --> send out
   // response.send("Hello"); // sends stuff to the screen
});
*/
