import React from 'react';
import Button from './components/Button';
import Button2 from './components/Button2';

function App() {
  return (
    <div>
      <Button text='Click Me1' onClick={() => alert('btn1')} />
      <Button2 text='Click Me2' onClick={() => alert('btn2')} />
    </div>
  );
}

export default App;
