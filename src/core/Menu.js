import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Menu = styled.div`
  display: flex;
  flex-direction: column;
`;

export default () => (
  <Menu>
    <h2>Menu</h2>
    <Link to='/page1'>Page1</Link>
    <Link to='/page2'>Page2</Link>
  </Menu>
);
