import React from 'react';

export default class Page1 extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      keyword: ''
    };
  }
  handleChange = e => {
    this.setState({
      keyword: e.target.value
    });
  };
  handleAdd = () => {
    this.setState({
      keyword: '',
      todos: [...this.state.todos, this.state.keyword]
    });
    this.input.focus();
  };
  handleClear = () => {
    this.setState({
      keyword: ''
    });
    this.input.focus();
  };
  handleRemove = index => {
    let newTodos = [...this.state.todos];
    newTodos.splice(index, 1);
    this.setState({
      todos: newTodos
    });
  };
  render() {
    const { todos, keyword } = this.state;
    return (
      <div>
        <h2>Todo List Correct Key Props</h2>
        <input
          ref={c => (this.input = c)}
          onChange={this.handleChange}
          value={keyword}
        ></input>
        <button onClick={this.handleAdd}>Add</button>
        <button onClick={this.handleClear}>Clear</button>
        <hr />
        <ul>
          {todos.map((todo, i) => (
            <li key={i} onClick={() => this.handleRemove(i)}>
              {todo}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
