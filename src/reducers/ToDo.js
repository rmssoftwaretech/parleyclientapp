import {
  FETCH_ALL_TODO_SUCCESS,
  FETCH_ALL_TODO_CONVERSATION_SUCCESS
} from 'constants/ActionTypes';

const initialState = {toDos: [],toDoConversation:[]}

export default function todos(state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL_TODO_SUCCESS:
      return {...state,toDos:action.payload}

     case FETCH_ALL_TODO_CONVERSATION_SUCCESS: 
      return {...state,toDoConversation:action.payload}   
   
    default:
      return state;
  }
}
