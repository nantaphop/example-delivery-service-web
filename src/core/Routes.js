import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Page1 from '../containers/Page1';
import Page2 from '../containers/Page2';
import Menu from './Menu';

const Row = styled.div`
  display: flex;
`;

const Screen = styled.div`
  width: 100%;
  min-height: 100%;
`;
const StyledSwitch = styled(Switch)`
  width: 100%;
  height: 100%;
`;
const FullScreenRoute = styled(Route)`
  width: 100%;
  height: 100%;
`;

export default () => (
  <Router>
    <Screen>
      <h1>Welcome</h1>
      <Row>
        <Menu />
        <StyledSwitch>
          <FullScreenRoute path='/page1'>
            <Page1 />
          </FullScreenRoute>
          <FullScreenRoute path='/page2'>
            <Page2 />
          </FullScreenRoute>
        </StyledSwitch>
      </Row>
    </Screen>
  </Router>
);
