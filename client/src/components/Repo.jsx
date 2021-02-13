import React from 'react';

const Repo = (props) => {

  return (
  <tr>
    <td>{props.id}</td>
      <td><a href={props.url}>{props.name}</a></td>
    <td>{props.size}</td>
    <td>{props.owner.url}</td>
  </tr>
  )
}


export default Repo;