import React from 'react'

export default function Count({text,count}) {
    console.log(`Rendering ${text}`)
  return (
    <div>Count
        {text}-{count}
    </div>
  )
}
