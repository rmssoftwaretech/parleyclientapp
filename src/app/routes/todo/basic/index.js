import React, {Component} from 'react';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';

import ToDoList from 'components/todo/ToDoList';
import ToDoConversationList from 'components/todo/ToDoConversationList';

import * as todoActions from 'actions/ToDo';

import {
  fetchTodosSuccess,
  fetchTodoConversation
} from 'actions/ToDo';



class ToDoPage extends Component {
  
  

  componentWillMount() {
    this.props.actions.fetchTodo();
    this.props.actions.fetchTodoConversation();
  }

 render() {
    console.log('---'+this.props.toDos);
    return (
      <div>
        <h1>ToDos</h1>
        

        <ToDoList toDos={this.props.toDos}/>
        <ToDoConversationList toDoConversation={this.props.toDoConversation}/>
      </div>
    );
  }
}

 
function mapStateToProps(state, ownProps) {
  return {
    toDos: state.toDos.toDos,
    toDoConversation: state.toDos.toDoConversation
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(todoActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoPage);

