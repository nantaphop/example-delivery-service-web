import React from 'react';

export default class Page1 extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      interval: undefined,
      keyword: ''
    };
  }
  handleStart = () => {
    const interval = setInterval(() => {
      console.log(`counting ${this.state.count}`);
      this.setState({ count: this.state.count + 1 });
    }, 1000);
    this.setState({
      interval
    });
  };
  handleStop = () => {
    clearInterval(this.state.interval);
    this.setState({
      interval: undefined
    });
  };
  handleChange = e => {
    this.setState({
      keyword: e.target.value
    });
  };
  handleClear = () => {
    this.setState({
      count: 0,
      keyword: '',
      interval: undefined
    });
    this.handleStop();
  };
  handleIncrementIncorrect = () => {
    // Problem
    this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 });
  };
  handleIncrementCorrect = () => {
    // Problem
    this.setState(state => ({ count: state.count + 1 }));
    this.setState(state => ({ count: state.count + 1 }));
    this.setState(state => ({ count: state.count + 1 }));
    this.setState(state => ({ count: state.count + 1 }));
    this.setState(state => ({ count: state.count + 1 }));
  };
  handleErrorBtn() {
    alert(this.state.count);
  }
  render() {
    const { count, keyword } = this.state;
    return (
      <div>
        <h2>Hi, this is class component</h2>
        <h2>We can use State here</h2>
        <h1>{count}</h1>
        <button onClick={this.handleStart}>Start</button>
        <button onClick={this.handleStop}>Stop</button>
        <hr />
        <h1>Keyword: {keyword}</h1>
        <h3>Uncontrolled Conponent</h3>
        <input onChange={this.handleChange}></input> (We can't clear its value)
        <h3>Controlled Conponent</h3>
        <input
          onChange={this.handleChange}
          value={count || keyword}
        ></input>{' '}
        (We can control its value)
        <hr />
        <button onClick={this.handleClear}>Clear</button>
        <hr />
        <button onClick={this.handleIncrementIncorrect}>
          +5 Count (Incorrect)
        </button>
        <button onClick={this.handleIncrementCorrect}>
          +5 Count (Correct)
        </button>
        <button onClick={this.handleErrorBtn}>Error Button</button>
      </div>
    );
  }
}
