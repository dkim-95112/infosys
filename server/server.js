var express = require('express');        // call express
var bodyParser = require('body-parser');


var appRouter = express.Router();
var staticPath = __dirname + '/../build';
appRouter
  .use('/js', express.static(staticPath + '/js'))
  .use('/css', express.static(staticPath + '/css'))
  .use('/images', express.static(staticPath + '/images'))
  .get('/*', function(req, res){
    res.sendfile('index.html', { root: staticPath } );
  });


/*
 HTTP Verb	Description
 /api/users	GET	Get all the bears.
 /api/users	POST	Create a bear.
 /api/users/:user_id	GET	Get a single bear.
 /api/users/:user_id	PUT	Update a bear with new info.
 /api/users/:user_id	DELETE	Delete a bear.
 */
var userRouter = express.Router();
userRouter
  .get('/', function (req, res) {
    res.json({messge: 'welcome to our api'});
  })
  //.use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())
  .post('/', function (req, res) {
    debugger
  });

var port = process.env.PORT || 8080;
var app = express(); // angular app
app
  .use('/', appRouter)
  .use('/api/users', userRouter)
  .listen(port);

debugger
console.log('Magic happens on port ' + port);
console.log('staticPath: ' + staticPath);
