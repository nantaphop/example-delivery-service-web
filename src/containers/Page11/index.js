import React from 'react';
import qs from 'qs';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Redirect,
  useParams
} from 'react-router-dom';

const PageThatUseParams = () => {
  const params = useParams();
  return (
    <div>
      <div>Route Params</div>
      <pre>{JSON.stringify(params, null, 2)}</pre>
      <div>Query String</div>
      <pre>
        {JSON.stringify(
          qs.parse(window.location.search, { ignoreQueryPrefix: true }),
          null,
          2
        )}
      </pre>
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
          <Link to='/11/route1'>route1</Link>
        </li>
        <li>
          <Link to='/11/route2'>route2</Link>
        </li>
        <li>
          <Link to='/11/params/123?page=1&sort=desc'>params</Link>
        </li>
      </ul>
      {/* <BrowserRouter basename='/11'> */}
      <Switch>
        <Route path='/11/route1'>
          <div>Here is Route1</div>
        </Route>
        <Route path='/11/route2'>
          <div>Here is Route2</div>
        </Route>
        <Route path='/11/params/:id'>
          <PageThatUseParams />
        </Route>
        <Redirect from='/11' to='/11/route1' />
      </Switch>
      {/* </BrowserRouter> */}
    </div>
  );
};
