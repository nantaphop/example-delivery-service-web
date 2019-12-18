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

// Demo
export default () => {
  return (
    <div>
      <h1>React Router Example</h1>
      <ul>
        <li>
          <Link to='/12/register'>Register</Link>
        </li>
      </ul>
      {/* <BrowserRouter basename='/11'> */}
      <Switch>
        <Route path='/12/register'>
          <Register />
        </Route>
      </Switch>
      {/* </BrowserRouter> */}
    </div>
  );
};
