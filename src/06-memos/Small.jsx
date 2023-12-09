import React, {memo} from 'react'

const Small = memo(({counter}) => {
    console.log("Me volvi a dibujar");
  return (
    <small>{counter}</small>
  )
})

export default Small