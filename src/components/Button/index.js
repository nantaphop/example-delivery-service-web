import React from 'react';
export default class Button extends React.Component {
  state = {
    count: 0
  };
  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    });
    this.props.onClick();
  };
  render() {
    const { text } = this.props;
    return (
      <button onClick={this.handleClick}>
        {text} {this.state.count}
      </button>
    );
  }
}
