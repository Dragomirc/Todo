import React, { Component } from 'react';
import axios from 'axios';
import TodoList from '../components/TodoList';
const baseUrl = 'https://jsonplaceholder.typicode.com/todos';
class App extends Component {
  state = {
    taskName: '',
    todos: []
  };

  async componentDidMount() {
    const res = await axios.get(baseUrl);
    this.setState({ todos: [...res.data.slice(0, 5)] });
  }

  onChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  onSubmit = async e => {
    e.preventDefault();
    const { todos, taskName } = this.state;
    // Fake ajax call
    // const res = await Promise.resolve(taskName);
    const res = await axios.post(baseUrl, {
      title: taskName,
      completed: false
    });
    const newTodos = [res.data, ...todos];
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
            autoComplete="off"
            value={taskName}
            onChange={this.onChange}
          />
          <button type="submit">Add</button>
        </form>
        <TodoList todoList={todos} />
      </div>
    );
  }
}

export default App;
