
const List = () => {
    const fruits = ['apple', 'banana', 'mango', 'orange', 'grapes'] 
    const Listitems = fruits.map(fruits => <li>{fruits}</li> );

    const fruits1 = [{id:1, name:'apple',calories: 93},
         {id:2, name:'banana' ,calories: 97},
           {id:3, name:'mango' ,calories: 76},
           {id:4, name:'orange' ,calories: 90},
            {id:5, name:'grapes' ,calories: 87}]

    fruits1.sort()
    const Listitems1 = fruits1.map(fruits1 => <li key={fruits1.index}>{fruits1.name}:&nbsp; <b>{fruits1.calories}</b></li>
        
      );
    return (
    <div>
    <ol>{Listitems}</ol>
    <br/>
    <ol>{Listitems1}</ol>

    </div>
  )
}

export default List
