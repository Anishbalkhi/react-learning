
import './App.css'
import Usergreeting from './assets/Usergreeting/Usergreeting'

const App = () => {
  return (
    <div>
      <Usergreeting userName="John" isLoggin={true} />
      <Usergreeting/>
      <Usergreeting userName="anis" isLoggin={true} />
      <Usergreeting   userName="neeraj"  isLoggin={true}/>
    </div>
  )
}


export default App
