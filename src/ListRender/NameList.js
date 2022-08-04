import React from 'react'
import Person from './Person'
function NameList() {
    const names=['apple','mango','pear']
    const nameList= names.map(n=><h1>{n}</h1>)
    const persons=[
        {
            id:1,
            name:'nikki',
            email:'nikki@gmail.com'
        },
        {
            id:3,
            name:'abc',
            email:'abc@gmail.com'
        },

    ]
    const peronsList=persons.map(p=> <Person key={p.name} p={p}/>)
  return (
    <div>
        {nameList}
        {peronsList}
    </div>
  )
}

export default NameList;