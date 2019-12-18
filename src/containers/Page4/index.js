import React from 'react';

export default class Page1 extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      interval: undefined
    };
  }
  componentDidMount() {
    const interval = setInterval(() => {
      console.log(`counting ${this.state.count}`);
      this.setState({ count: this.state.count + 1 });
    }, 1000);
    this.setState({
      interval
    });
  }
  componentWillUnmount() {
    clearInterval(this.state.interval);
    this.setState({
      interval: undefined
    });
  }
  render() {
    const { count } = this.state;
    return (
      <div>
        <h2>Hi, this is class component</h2>
        <h2>We can use State here</h2>
        <h1>{count}</h1>
      </div>
    );
  }
}
