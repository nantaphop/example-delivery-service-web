import React from 'react';

export default class Page1 extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    console.log('Mounted');
  }
  componentDidUnMount() {
    console.log('UnMounted');
  }
  render() {
    return (
      <div>
        <h2>Hi, this is class component</h2>
        <h2>Lifecycle Explain</h2>
        <img
          width='1200px'
          alt=''
          src='https://i1.wp.com/programmingwithmosh.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-31-at-1.44.28-PM.png?ssl=1'
        />
      </div>
    );
  }
}
