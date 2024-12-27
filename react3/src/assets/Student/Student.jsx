import proptypes from 'prop-types'
const Student = (props) => {
  return (
    <div className='student'>
      <p>Name:  {props.name}</p>
      <p>Age:  {props.age}</p>
      <p>Student:  {props.isStudent ? "Yes" : "No"}</p>
    </div>
  )
}
Student.propTypes = {
    name: proptypes.string,
    age: proptypes.number,
    isStudent: proptypes.bool
  }

Student.defaultProps = {
    name: "Guest",
    age: 19,
    isStudent: "Yes"
  }
export default Student
