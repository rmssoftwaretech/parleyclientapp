import ToDosApi from '../api/mockToDosApi';
import ToDoConversationsApi from '../api/mockToDoConversationsApi';

import {
  FETCH_ALL_TODO,
  FETCH_ALL_TODO_SUCCESS,
  FETCH_ALL_TODO_CONVERSATION,
  FETCH_ALL_TODO_CONVERSATION_SUCCESS,
 
} from 'constants/ActionTypes'
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function fetchTodo() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return ToDosApi.fetchAllToDos().then(todos => {
      dispatch(fetchTodosSuccess(todos));
    }).catch(error => {
      throw(error);
    });
  };
}

export function fetchTodoConversation() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return ToDoConversationsApi.fetchAllToDoConversations().then(toDoConversation => {
      dispatch(fetchTodosConversationSuccess(toDoConversation));
    }).catch(error => {
      throw(error);
    });
  };
}


export const fetchTodosSuccess = (todos) => {
  return {
    type: FETCH_ALL_TODO_SUCCESS,
    payload:todos
  }
};


export const fetchTodosConversationSuccess = (toDoConversation) => {
  return {
    type: FETCH_ALL_TODO_CONVERSATION_SUCCESS,
    payload: toDoConversation
  }
};
