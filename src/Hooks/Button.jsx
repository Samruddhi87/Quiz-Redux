import React from 'react'

function Button({handleClick,children}) {
  return (
    <div>Button
<button onClick={handleClick}>{children}</button>

    </div>
  )
}

export default Button