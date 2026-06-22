import React from 'react'

function StudentsStatus(props) {
  return (
    <tr>
        <td>{props.Rollno}</td>
        <td>{props.Name}</td>
        <td>{props.Status}</td>
    </tr>
    
  )
}

export default StudentsStatus