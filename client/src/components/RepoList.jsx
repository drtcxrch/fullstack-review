import React from 'react';
import Repo from './Repo.jsx';

const RepoList = (props) => {
  const repos = props.repos;

  return (
    <div>
      <br/>
      <span>There are {props.repos.length} repos.</span>
      <br/>
      <br/>
      <table style={{ marginLeft: 'auto', marginRight: 'auto', tableLayout: 'auto'}}>
        <thead >
          <tr>
            <th>Id</th>
            <th>Repo Name</th>
            <th>Size</th>
            <th>Owner</th>
          </tr>
        </thead>
      <tbody>
        {repos.map((repo) => (
          <Repo key={repo._id} id={repo._id} name={repo.name} size={repo.size} owner={repo.owner} url={repo.html_url}/>
        ))}
      </tbody>
      </table>
    </div>
  )
}


export default RepoList;