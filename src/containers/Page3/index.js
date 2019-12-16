import React from 'react';
import styled from 'styled-components';
import Button3 from '../../components/Button3';
const StyledPage = styled.div`
  width: 100%;
  min-height: 500px;
  background-color: pink;
`;
export default () => (
  <StyledPage>
    Page 2
    <Button3 text='Click Me' onClick={() => alert('btn2')} />
  </StyledPage>
);
