import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 16px;
  background-color: lightblue;
  border-radius: 8px;
`;
export default ({ text, onClick }) => (
  <StyledButton onClick={onClick}>{text}</StyledButton>
);
