import React from 'react'
import "../Calculator/calculator.css"
const Output = (props) => {
  return (
    <div className='output'>
      <div>{props.input||0}</div>
      {/* <div>({props.result})</div> */}
    </div>
  )
}

export default Output