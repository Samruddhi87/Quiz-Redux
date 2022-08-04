import React from 'react'

function Person({p,key}) {
  return (
    <div>
        
        {key}{p.id}  my name is: {p.name} email :{p.email}</div>
  )
}

export default Person