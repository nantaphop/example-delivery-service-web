import React, { useState, useEffect } from 'react';

export default () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
      console.log('Tick..', count);
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div>
      <h2>Count {count}</h2>
    </div>
  );
};
