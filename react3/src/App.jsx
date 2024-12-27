
import Student from './assets/Student/Student.jsx'
import './App.css'

const App = () => {
  return (
    <div className='app'>
      <Student name="Anis balkhi" age={20} isStudent={true}/>
      <Student name="vinod kumar" age={21} isStudent={false}/>
      <Student name="sumit gupta" age={20} isStudent={true}/>
      <Student name="sachin dhaka" age={19} isStudent={false}/>
      <Student/>
    </div>
  );
}


export default App
