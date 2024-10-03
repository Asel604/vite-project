import React from 'react'

function User({data}) {
  return (
    <div>
        <img src={data.image} alt="" />
      <h2>{data.name}</h2>
      <h4>{data.age}</h4>
    </div>
  )
}

export default User
