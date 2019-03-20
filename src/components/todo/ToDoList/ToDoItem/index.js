import React from 'react';

 

const ToDoItem = ({todo}) => {
  
  return (
    <div className="module-list-item">
      
        <div className="row">
          <div className="module-todo-content col-9 col-sm-10 col-md-11">
             
              {todo.title}
             
             
             
          </div>
           <div className="module-todo-content col-9 col-sm-10 col-md-11">
            {todo.user}
            </div>
             <div className="module-todo-content col-9 col-sm-10 col-md-11">
              {todo.startDate}
            </div>
             
        </div>
    </div>

  )
};

export default ToDoItem;