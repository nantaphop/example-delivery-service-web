import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
const StyledPage = styled.div`
  width: 100%;
  min-height: 500px;
  background-color: yellow;
`;
export default () => {
  const { id } = useParams();
  return <StyledPage>Page 1 {id}</StyledPage>;
};
