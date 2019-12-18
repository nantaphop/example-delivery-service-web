import React, { useState, createContext, useContext } from 'react';

// No Global State Version
const UserProfile = ({ user, setUser }) => (
  <div>
    <b>{user}</b>
    <button onClick={() => setUser(`${user}_1`)}>Set User</button>
  </div>
);
const MyPage = ({ user, setUser }) => (
  <div>
    This is Page
    <UserProfile user={user} setUser={setUser} />
  </div>
);
const MyNoGlobalLayout = () => {
  const [user, setUser] = useState('John Doe');
  return (
    <div>
      This is Layout
      <MyPage user={user} setUser={setUser} />
    </div>
  );
};

// This is Context Version
// Move this to AppContext.js
const AppContext = createContext();
const AppProvider = ({ children }) => {
  const [user, setUser] = useState('John Doe');
  return (
    <AppContext.Provider
      value={{
        state: { user },
        setUser
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
const useAppContext = () => useContext(AppContext);

// Our Code
const UserProfile2 = () => {
  const app = useAppContext();
  return (
    <div>
      <b>{app.state.user}</b>
      <button onClick={() => app.setUser(`${app.state.user}_1`)}>
        Set User
      </button>
    </div>
  );
};
const MyPage2 = () => (
  <div>
    This is Page
    <UserProfile2 />
  </div>
);
const MyLayoutWithContext = () => {
  return (
    <AppProvider>
      This is Layout
      <MyPage2 />
    </AppProvider>
  );
};

// Demo
export default () => {
  return (
    <div>
      <h1>No App Global State</h1>
      <MyNoGlobalLayout />
      <hr />
      <h1>App With Context as Global State</h1>
      <MyLayoutWithContext />
    </div>
  );
};
