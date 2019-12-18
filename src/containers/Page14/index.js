import React, { useState, useEffect } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';
import styled, { css, ThemeProvider } from 'styled-components';

// http-client.js
const createClient = () => {
  const headers = {};
  const token = localStorage.getItem('token');
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  return axios.create({
    baseURL: 'http://localhost:3088',
    headers
  });
};
let client = createClient();

const restartClient = () => {
  client = createClient();
};

// Theme
const theme = {
  space: {
    sm: '8px',
    md: '16px'
  }
};
// Theme Selector
const spaceMd = props => props.theme.space.md;
const spaceSm = props => props.theme.space.sm;

// Component
const Button = styled.button`
  padding: ${props => props.theme.space.md};
`;
const Input = styled.input`
  padding: ${spaceMd};
`;
const Panel = styled.div`
  padding: ${spaceMd};
  display: flex;
  width: 400px;
  flex-direction: column;
`;
const Response = styled.pre`
  border: 1px solid #8d8d8d;
  border-radius: ${spaceSm};
  padding: ${spaceMd};
  color: white;
  background: black;
  overflow: scroll;
  ${props =>
    props.error &&
    css`
      background: darkred;
    `}
`;

// Register Page
const Register = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [response, setResponse] = useState();
  const handleChange = setter => e => setter(e.target.value);
  const handleRegister = async () => {
    const res = await client.post('/auth/register', {
      username,
      password
    });
    setResponse(res.data);
  };
  return (
    <Panel>
      <h3>Register</h3>
      <Input placeholder='username' onChange={handleChange(setUsername)} />
      <Input placeholder='password' onChange={handleChange(setPassword)} />
      <Button onClick={handleRegister}>Submit</Button>
      {response && <Response>{JSON.stringify(response, null, 2)}</Response>}
    </Panel>
  );
};

// Login Page
const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [response, setResponse] = useState();
  const [error, setError] = useState();
  const handleChange = setter => e => setter(e.target.value);
  const handleLogin = async () => {
    try {
      setError(false);
      const res = await client.post('/auth/login', {
        username,
        password
      });
      setResponse(res.data);
      localStorage.setItem('token', res.data.token);
      restartClient();
    } catch (e) {
      setError(true);
      setResponse(e.response.data);
    }
  };
  return (
    <Panel>
      <h3>Login</h3>
      <Input placeholder='username' onChange={handleChange(setUsername)} />
      <Input placeholder='password' onChange={handleChange(setPassword)} />
      <Button onClick={handleLogin}>Submit</Button>
      {response && (
        <Response error={error}>{JSON.stringify(response, null, 2)}</Response>
      )}
    </Panel>
  );
};

// Logout Page
const Logout = () => {
  const handleLogout = async () => {
    localStorage.removeItem('token');
    restartClient();
  };
  return (
    <Panel>
      <h3>Logout</h3>
      <Button onClick={handleLogout}>Logout</Button>
    </Panel>
  );
};

// List User
const ListUser = () => {
  const [response, setResponse] = useState();
  useEffect(() => {
    async function listUser() {
      try {
        const res = await client.get('/admin/users');
        setResponse(res.data);
      } catch (e) {
        setResponse(e.response.data || 'Unauthorized');
      }
    }
    listUser();
  }, []);
  return (
    <Panel>
      <h3>List Users</h3>
      {response && <Response>{JSON.stringify(response, null, 2)}</Response>}
    </Panel>
  );
};

// Demo
export default () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <h1>React Router Example</h1>
        <ul>
          <li>
            <Link to='/14/register'>Register</Link>
          </li>
          <li>
            <Link to='/14/login'>Login</Link>
          </li>
          <li>
            <Link to='/14/logout'>Logout</Link>
          </li>
          <li>
            <Link to='/14/admin/users'>Admin List Users</Link>
          </li>
        </ul>
        {/* <BrowserRouter basename='/11'> */}
        <Switch>
          <Route path='/14/register'>
            <Register />
          </Route>
          <Route path='/14/login'>
            <Login />
          </Route>
          <Route path='/14/logout'>
            <Logout />
          </Route>
          <Route path='/14/admin/users'>
            <ListUser />
          </Route>
        </Switch>
        {/* </BrowserRouter> */}
      </div>
    </ThemeProvider>
  );
};
