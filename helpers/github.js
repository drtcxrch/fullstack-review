const axios = require('axios');
const config = require('../config.js');

let getReposByUsername = (user) => {

  let options = {
    url: `https://api.github.com/users/${user}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  return axios.get(options.url, options)
    .then(response => response.data)
}

module.exports.getReposByUsername = getReposByUsername;