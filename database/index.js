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
  size: { type: Number, required: true },
  html_url: {type: String, required: true}
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (data) => {
  let newRepo = new Repo(data);
  newRepo.save((err, newRepo) => {
    if (err) {
      return console.error(err);
    }
    console.log('Record saved:', newRepo._id);
  })

}

module.exports.save = save;
module.exports.Repo = Repo;