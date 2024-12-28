

const Button = () => {
        const handleclick1 = (e) => {
            e.target.textContent = "bro, stop clicking me 😡"
        }
    

  return (
    <div>
      <button onDoubleClick={(e)=>handleclick1(e)}>click me 😊 </button>
    </div>
  )
}

export default Button
