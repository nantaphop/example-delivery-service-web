import React, { useState } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 16px;
  background-color: lightblue;
  border-radius: 8px;
`;
export default ({ text, onClick }) => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
    onClick();
  };
  return (
    <StyledButton onClick={handleClick}>
      {text} Hook {count}
    </StyledButton>
  );
};
