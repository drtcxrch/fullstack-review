const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher', {
  useMongoClient: true,
});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'))
db.once('open', () => console.log('connected to db!'))

let repoSchema = mongoose.Schema({
  name: {type: String, required: true},
  owner: {
    url: {type: String, required: true}
  },
  size: { type: Number, required: true }
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (data) => {
  // console.log('data!!!', data);
  let newRepo = new Repo(data);
  console.log('*****This is a new repo!!!', newRepo);
  newRepo.save((err, newRepo) => {
    if (err) {
      return console.error(err);
    } else {
      console.log('Repo saved!')
    }
  })
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}

module.exports.save = save;