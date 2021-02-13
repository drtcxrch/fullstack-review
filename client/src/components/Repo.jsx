import React from 'react';

const Repo = (props) => {

  return (
  <tr>
      <td style={{ textAlignVertical: "center", textAlign: "center" }}>{props.id}</td>
      <td style={{ textAlignVertical: "center", textAlign: "center" }}>{props.name}</td>
      <td style={{ textAlignVertical: "center", textAlign: "center" }}>{props.size}</td>
      <td style={{ textAlignVertical: "center", textAlign: "center" }}>{props.owner.url}</td>
  </tr>
  )
}


export default Repo;