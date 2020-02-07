import React, { Component } from 'react';
import TodoList from './TodoList';

class App extends Component {
  state = {
    taskName: '',
    todos: []
  };

  onChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  onSubmit = async e => {
    e.preventDefault();
    const { todos, taskName } = this.state;
    // Fake ajax call
    const res = await new Promise.resolve(taskName);
    const newTodos = [...todos, res];
    this.setState({ todos: newTodos, taskName: '' });
  };

  render() {
    const { taskName, todos } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label htmlFor="todo">Add your Todo</label>
          <input
            id="todo"
            name="taskName"
            type="text"
            value={taskName}
            onChange={this.onChange}
          />
          <button>Add</button>
        </form>
        <TodoList todoList={todos} />
      </div>
    );
  }
}

export default App;
