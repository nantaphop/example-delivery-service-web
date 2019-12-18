import React, { useState, useEffect } from 'react';
import qs from 'qs';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Redirect,
  useParams
} from 'react-router-dom';
import axios from 'axios';

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
    <div>
      <h3>Register</h3>
      <input placeholder='username' onChange={handleChange(setUsername)} />
      <input placeholder='password' onChange={handleChange(setPassword)} />
      <button onClick={handleRegister}>Submit</button>
      {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
    </div>
  );
};

// Login Page
const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [response, setResponse] = useState();
  const handleChange = setter => e => setter(e.target.value);
  const handleLogin = async () => {
    try {
      const res = await client.post('/auth/login', {
        username,
        password
      });
      setResponse(res.data);
      localStorage.setItem('token', res.data.token);
      restartClient();
    } catch (e) {
      setResponse(e.response.data);
    }
  };
  return (
    <div>
      <h3>Login</h3>
      <input placeholder='username' onChange={handleChange(setUsername)} />
      <input placeholder='password' onChange={handleChange(setPassword)} />
      <button onClick={handleLogin}>Submit</button>
      {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
    </div>
  );
};

// Logout Page
const Logout = () => {
  const handleLogout = async () => {
    localStorage.removeItem('token');
    restartClient();
  };
  return (
    <div>
      <h3>Logout</h3>
      <button onClick={handleLogout}>Logout</button>
    </div>
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
    <div>
      <h3>List Users</h3>
      {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
    </div>
  );
};

// Demo
export default () => {
  return (
    <div>
      <h1>React Router Example</h1>
      <ul>
        <li>
          <Link to='/13/register'>Register</Link>
        </li>
        <li>
          <Link to='/13/login'>Login</Link>
        </li>
        <li>
          <Link to='/13/logout'>Logout</Link>
        </li>
        <li>
          <Link to='/13/admin/users'>Admin List Users</Link>
        </li>
      </ul>
      {/* <BrowserRouter basename='/11'> */}
      <Switch>
        <Route path='/13/register'>
          <Register />
        </Route>
        <Route path='/13/login'>
          <Login />
        </Route>
        <Route path='/13/logout'>
          <Logout />
        </Route>
        <Route path='/13/admin/users'>
          <ListUser />
        </Route>
      </Switch>
      {/* </BrowserRouter> */}
    </div>
  );
};
