var express = require('express');
var bodyParser = require('body-parser'); // for request.body
var fs = require('fs');

var staticPath = __dirname + '/../build';
console.log('staticPath: ' + staticPath);

var appRouter = express.Router();
appRouter
  .use('/js', express.static(staticPath + '/js'))
  .use('/css', express.static(staticPath + '/css'))
  .use('/images', express.static(staticPath + '/images'))
  .get('/*', function(req, res){
    res.sendFile('index.html', { root: staticPath } );
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
    var writeFile = 'users.log';
    fs.writeFileSync(writeFile, JSON.stringify(req.body, null, 4));
  });

var port = process.env.PORT || 8080;
var app = express(); // angular app
app
  .use('/', appRouter)
  .use('/api/users', userRouter)
  .listen(port);
console.log('listening on port ' + port);

debugger

