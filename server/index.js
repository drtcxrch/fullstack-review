const express = require('express');
let app = express();
var bodyParser = require('body-parser');
const helpers = require('../helpers/github');
const db = require('../database/index');

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: true }))
app.post('/repos', function (req, res) {

  var githubUser = req.headers.username;
  // console.log('User***', githubUser)
 helpers.getReposByUsername(githubUser)
  .then(repos => {
    const ids = [];
    for (var repo in repos) {
      if (ids.indexOf(repos[repo].id) === -1) {
        ids.push(repos[repo].id);
        db.save(repos[repo]);
      }
    }
  })
  .catch(err => console.log(err));

  res.send(console.log('userData received'));
});

app.get('/repos', function (req, res) {
  db.Repo.find({})
    .limit(25)
    .sort({size:-1})
    .then((results) => {
      res.send(results);
      console.log(results);
    })
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

