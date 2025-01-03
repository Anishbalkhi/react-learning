import React, {useState} from 'react'

const Mycomponent = () => {
const [name, setName] = useState("Guest")
const [age, setAge] = useState(0)
const [isEmployed, setisEmployed] = useState(false)

const changeName = () => {
    setName("anis");
 }
const increament = () => {
        setAge(age + 3);}
const Toggle = () => {
    setisEmployed(!isEmployed);
}

  return (
    <div>
      <p>name : {name} </p>
      <button onClick={()=>changeName()}>set name:</button>

      <p>age : {age} </p>
      <button onClick={()=>increament()}>increament:</button>

      <p>isEmployed : {isEmployed? "Yes" : "No"} </p>
      <button onClick={()=>Toggle()}>Toggle status</button>
    </div>
  )
}

export default Mycomponent
