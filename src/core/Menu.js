import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  padding: 8px;
`;

export default () => (
  <Menu>
    <h2>Menu</h2>
    <Link to='/1'>1. Class Component</Link>
    <Link to='/2'>2. Functional Stateless Component</Link>
    <Link to='/3'>3. Props</Link>
    <Link to='/4'>4. State</Link>
    <Link to='/5'>5. Event Handler</Link>
    <Link to='/6'>6. Conditional Rendering</Link>
    <Link to='/7'>7. List and Key</Link>
    <Link to='/8'>8. useState Hook</Link>
    <Link to='/9'>9. useEffect Hook</Link>
    <Link to='/10'>10. Context</Link>
    <Link to='/11'>11. React Router</Link>
    <Link to='/12'>12. Request Http</Link>
    <Link to='/13'>13. Login and Store Token</Link>
    <Link to='/14'>14. Styled-Compoennts</Link>
  </Menu>
);
