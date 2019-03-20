import React, {PropTypes} from 'react';
import ToDoConversationItem from './ToDoConversationItem';

const ToDoConversationList = ({toDoConversation}) => {

  console.log('toDoConversation'+toDoConversation);
  if (toDoConversation==='undefined')  { 

  	return(<></>) 

  }
 
  else { 

  return (
    <div className="module-list">
      
         <table className="table">
      <thead>
      
      </thead>
      <tbody>
      {toDoConversation.map(toDoConversation =>
        <ToDoConversationItem key={toDoConversation.id} toDoConversation={toDoConversation}/>
      )}

      </tbody>
    </table>
     
    </div>
  )
}
};




export default ToDoConversationList;

