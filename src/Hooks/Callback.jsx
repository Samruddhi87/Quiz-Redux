import React from 'react'
import { useState } from 'react'
import Button from './Button'
import Count from './Count'
export default function Callback() {
    const[age,setAge]=useState(18)
    const[salary,setSalary]=useState(5000)
    const incrementAge=()=>{
        setAge(age+1);
    }
    const incrementSalary=()=>{
        setSalary(salary+2000)
    }
  return (
    <div>useCallback
<Count text="Age" count={age}/>
<Button handleClick={incrementAge}>Increment Age </Button>
<Count text="Salary" count={salary}/>
<Button handleClick={incrementSalary}>Increment Salary </Button>

    </div>
  )
}
