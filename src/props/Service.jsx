import React from 'react'
import "./service.css";

function Service({name, image,price, completed}) {
  return (
    <div className={`service ${completed ? "green" : "red"}`}>
        <img src={image} alt="" />
        <div className='content'>
            <h4>{name}</h4>
            <p>{price}</p>
        </div>
      
    </div>
  )
}

export default Service
