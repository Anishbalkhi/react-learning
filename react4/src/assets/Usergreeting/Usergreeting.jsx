
import proptypes from 'prop-types'

const Usergreeting = (props) => {
    const userName =  <p className='userName'> hello my name is {props.userName} </p>
    const loginPrompt = <p className='loginPrompt'> Please login to website </p>
  return ( props.isLoggin ? userName : loginPrompt )
}
Usergreeting.propTypes = {
    userName: proptypes.string,
    isLoggin: proptypes.bool
  }
  
  Usergreeting.defaultProps = {
    userName: 'Guset',
    isLoggin: false
  }
export default Usergreeting
