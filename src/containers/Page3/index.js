// Props Example
import React from 'react';

const Item1 = ({ title, subTitle, children }) => (
  <div>
    <b>{title}</b> {subTitle}
    <pre>{children}</pre>
  </div>
);

export default () => (
  <div>
    <Item1 title='We can pass props' subTitle='to components' />
    <Item1 title='It can be String' subTitle='like this' />
    <Item1 title='Or a number' subTitle={555} />
    <Item1
      title='Or others'
      subTitle={() => {
        alert('Hi');
      }}
    />
    <Item1 title='And'>I'm Children</Item1>
  </div>
);
