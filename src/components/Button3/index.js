import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 16px;
  background-color: green;
  border-radius: 8px;
`;
export default ({ text, onClick }) => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
    onClick();
  };
  useEffect(() => {
    const interval = setInterval(() => setCount(count + 1), 1000);
    return () => clearInterval(interval);
  });
  return (
    <StyledButton onClick={handleClick}>
      {text} Hook {count}
    </StyledButton>
  );
};
