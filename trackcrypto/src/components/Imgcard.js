import React from 'react'

const Imgcard = (props) => {
  return (

<>
<img src={props.icon} alt="#"/>
<p>name: {props.name}</p>
<p>price:{props.price}</p>
</>
  )
}

export default Imgcard