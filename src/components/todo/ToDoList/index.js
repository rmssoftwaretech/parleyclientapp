import React, {PropTypes} from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = ({toDos}) => {

  console.log('toDos'+toDos);
  if (toDos==='undefined')  { 

  	return(<></>) 

  }
 
  else { 

  return (
    <div className="module-list">
      
         <table className="table">
      <thead>
      
      </thead>
      <tbody>
      {toDos.map(todo =>
        <ToDoItem key={todo.id} todo={todo}/>
      )}

      </tbody>
    </table>
     
    </div>
  )
}
};




export default ToDoList;

