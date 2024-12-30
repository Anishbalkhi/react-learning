import React, {useState} from 'react'

const ColorPicker = () => {

    const [color,setColor] = useState("#e04d4d")

   const handleColorChange = (e) => {
        setColor(e.target.value)
    }

  return (
    <div className='color-picker-container'>
        <h1>Color Picker</h1>
        <div className='container' style={{backgroundColor: color}}>
        <p className='para'>Select Color: {color}</p>    
        </div> 

        <label>Select Color:</label>
        <input type="color" value={color} onChange={handleColorChange}/>     
    </div>
  )
}

export default ColorPicker
