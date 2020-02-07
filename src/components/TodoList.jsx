import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todoList }) => {
  const todos = todoList.map(todo => (
    <TodoItem key={todo.title} name={todo.title} completed={todo.completed} />
  ));
  return todos;
};
export default TodoList;
