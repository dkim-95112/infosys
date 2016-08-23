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

function validateForm(d) {
  var reEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(!reEmail.test(d.email)){
    return {error: 'bad email format'};
  }
  return {success: 'success'};
}

userRouter
  .get('/', function (req, res) {
    res.json({messge: 'welcome to our api'});
  })
  //.use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())
  .post('/', function (req, res) {
    var result = validateForm(req.body);
    if(result.success){
      var writeFile = 'users.log';
      fs.writeFileSync(writeFile, JSON.stringify(req.body, null, 4));
      res.json({user_id: 1234});
    } else {
      res.json(JSON.stringify(result));
    }
  });

var port = process.env.PORT || 8080;
var app = express(); // angular app
app
  .use('/', appRouter)
  .use('/api/users', userRouter)
  .listen(port);
console.log('listening on port ' + port);

