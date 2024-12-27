
import User from './assets/user.jpg'
import './Card.css'

const Card = () => {
  return (
    <div className='card' >
      <img className='userpic' src={User} alt='this is a random picture from laptop' />
      <h1 className='title'>Anis Balkhi</h1>
      <p className='text'>This is my card component</p>
    </div>
  );
}

export default Card;
