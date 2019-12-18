import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Page1 from '../containers/Page1';
import Page2 from '../containers/Page2';
import Page3 from '../containers/Page3';
import Page4 from '../containers/Page4';
import Page5 from '../containers/Page5';
import Page6 from '../containers/Page6';
import Page7 from '../containers/Page7';
import Page8 from '../containers/Page8';
import Page9 from '../containers/Page9';
import Page10 from '../containers/Page10';
import Page11 from '../containers/Page11';
import Page12 from '../containers/Page12';
import Page13 from '../containers/Page13';
import Page14 from '../containers/Page14';
import Menu from './Menu';

const routes = [
  Page1,
  Page2,
  Page3,
  Page4,
  Page5,
  Page6,
  Page7,
  Page8,
  Page9,
  Page10,
  Page11,
  Page12,
  Page13,
  Page14
];

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
      <h1>React Example</h1>
      <Row>
        <Menu />
        <StyledSwitch>
          {routes.map((Comp, i) => (
            <FullScreenRoute path={`/${i + 1}`}>
              <Comp />
            </FullScreenRoute>
          ))}
        </StyledSwitch>
      </Row>
    </Screen>
  </Router>
);
