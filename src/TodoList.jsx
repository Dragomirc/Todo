import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todoList }) => {
  const todos = todoList.map(todo => <TodoItem name={todo} />);
  return todos;
};
export default TodoList;
