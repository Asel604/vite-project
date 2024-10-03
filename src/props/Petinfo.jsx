import React from 'react'
// rfce
function Petinfo(props) {
    const {name, age, image} = props
  return (
    <div >
      My name is {name} and my age is {age}
      <img className='image' style={{width:"200px", height: "150px",}} src={image} alt="" />
    </div>
  )
}

export default Petinfo
