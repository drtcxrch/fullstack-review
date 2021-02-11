const axios = require('axios');
const config = require('../config.js');

let getReposByUsername = (user) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    url: 'https://api.github.com',
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  axios.get(user, options)
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .then(() => console.log('done'))

}

// getReposByUsername('drtcxrch')

module.exports.getReposByUsername = getReposByUsername;