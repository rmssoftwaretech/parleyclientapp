import React from 'react';

 

const ToDoConversationItem = ({toDoConversation}) => {
  console.log(toDoConversation);
  return (
    <div className="module-list-item">
      
        <div className="row">
          <div className="module-todo-content col-9 col-sm-10 col-md-11">
             
              {toDoConversation.conversationData[0].name}
             
             
             
          </div>
           <div className="module-todo-content col-9 col-sm-10 col-md-11">
            
            </div>
             <div className="module-todo-content col-9 col-sm-10 col-md-11">
              
            </div>
             
        </div>
    </div>

  )
};

export default ToDoConversationItem;