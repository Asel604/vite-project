import React from 'react'
import "./About.css"

function About({data} ) {
  return (
    <div>
       <div className='ab'>
       <img src={data.image} alt="" />
       <h3>{data.category}</h3>
       <h6>{data.price}</h6>
      <h2>{data.title}</h2>
      <h4>{data.discount}</h4>
      <h4>{data.rating}</h4>
       </div>

    </div>
  )
}

export default About
