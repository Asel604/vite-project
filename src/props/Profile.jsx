import React from 'react'
import "./profile.css"

function Profile({data}) {

  return (
    <div className={`profile ${data.active ? "true" : "false"}`}>
      <img src={data.image} alt="" />
    <div className='content'>
    <h2>{data.name}</h2>
      <h4>{data.price}</h4>
      <h5>{data.rating}</h5>
      <h5>{data.numReviews}</h5>

    </div>
    </div>
  )
}

export default Profile
