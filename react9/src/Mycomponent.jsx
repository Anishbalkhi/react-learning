import React, {useState} from 'react'

const Mycomponent = () => {
 const [name, setName] = useState()
 const [quantity, setQuantity] = useState(1)
 const [comment, setComment] = useState()
const [payment, setPayment] = useState()
const [shipping, setShipping] = useState()


 const handleNameChange = (e)=>{
    setName(e.target.value)
 }

const handleQuantityChange = (e)=>{
    setQuantity(e.target.value)
}

const handleCommentChange = (e) =>{
    setComment(e.target.value)
}

const handlePaymentChange = (e) =>{
    setPayment(e.target.value)
}

const handleShippedChange = (e) =>{
    setShipping(e.target.value)
}

 return (

    <div>
      <input value={name}  onChange={handleNameChange}/>
      <p > value: {name}</p>

      <input value={quantity}  onChange={handleQuantityChange}  type='number'/>
      <p > quantity: {quantity}</p>

      <textarea value={comment} placeholder='enter about something that you are thinkng about'  onChange={handleCommentChange}/>
    
    <p>Comments:   {comment}</p>
    


    <select value={payment} onChange={handlePaymentChange}>
    <option value="">please an option</option>
    <option value="Visa"> Visa</option>
    <option value="online"> online</option>
    <option value="master card"> master card</option>
    </select>

    <p>paymeny by: {payment}</p>


    <label>
        <input type='radio' value="Pick up"  onChange={handleShippedChange}
        checked={shipping === "Pick up"} ></input>
    Pick up: 
    </label>
    <br></br>
    <label>
        <input type='radio' value="delivary"  onChange={handleShippedChange}
        checked={shipping === "delivary"} ></input>
    Delivary: 
    </label>


    <p>Shipping: {shipping}</p>
    </div>
  )
}

export default Mycomponent
