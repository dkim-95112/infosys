'use strict';
const express = require('express');
const bodyParser = require('body-parser'); // for request.body
const fs = require('fs');

const staticPath = __dirname + '/../build';
console.log('staticPath: ' + staticPath);
const writeFile = 'users.log';
console.log('writeFile: ' + writeFile);


const appRouter = express.Router();
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
const userRouter = express.Router();

function validateForm(d) {
  const reEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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
    const result = validateForm(req.body);
    if(result.success){
      fs.writeFile(writeFile, JSON.stringify(req.body, null, 4), (err) =>{
        if(err){
          throw err;
        }
        res.json({user_id: 1234});
      });

    } else {
      res.json(result);
    }
  });

const port = process.env.PORT || 8080;
const app = express(); // angular app
app
  .use('/', appRouter)
  .use('/api/users', userRouter)
  .listen(port);
console.log('listening on port ' + port);

