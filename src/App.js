import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Todo } from './Todo';
import { TodoList } from './TodoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' , priority: '', dueDate: ''};
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handlePriorityChange = this.handlePriorityChange.bind(this);
    this.handleDueDateChange = this.handleDueDateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">TODO React App</h1>
        </header>
        <h3>TODO</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="text-todo">
            What needs to be done:
          </label>
          <input
            id="text-todo"
            type="text"
            onChange={this.handleTextChange}
            value={this.state.text}
          />
          <label htmlFor="priority-todo">
            Priority:
          </label>
          <input
            id="priority-todo"
            type="number"
            onChange={this.handlePriorityChange}
            value={this.state.priority}
          />
          <label htmlFor="dueDate-todo">
            Due Date:
          </label>
          <input
            id="dueDate-todo"
            type="Date"
            onChange={this.handleDueDateChange}
            value={this.state.dueDate}
          />
          <button>
            Add #{this.state.items.length + 1}
          </button>
        </form>
        <TodoList list={this.state.items}></TodoList>
      </div>
    );
  }

  handleTextChange(e) {
    this.setState({ text: e.target.value });
  }

  handlePriorityChange(e){
    this.setState({ priority: e.target.value});
  }

  handleDueDateChange(e){
    this.setState({ dueDate: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length || !this.state.priority.length || !this.state.dueDate.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      priority: this.state.priority,
      dueDate: Date.now(),

    };
    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      text: ''
    }));
  }
}

export default App;
