import React from 'react'

const Food = () => {
    const food1 = "apple";
    const food2 = "banana";
  return (
    <>
    <hr></hr>
    <ul>
        <li>orange</li>
        <li>{food1}</li>
        <li>{food2.toUpperCase()}</li>
    </ul>
    <hr></hr>
    </>
  )
}

export default Food