const express = require('express');
let app = express();
var bodyParser = require('body-parser');
const helpers = require('../helpers/github');

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: true }))
app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  var githubUser = req.headers.username;

  var userData = helpers.getReposByUsername(githubUser);
  console.log(userData);
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  // console.log('*******req', req)
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

