import React, { useState, useRef } from 'react';

export default () => {
  const [todos, setTodos] = useState([]);
  const [keyword, setKeyword] = useState('');
  const textInput = useRef();

  const handleChange = e => setKeyword(e.target.value);
  const handleAdd = () => {
    setTodos([...todos, keyword]);
    setKeyword('');
    textInput.current.focus();
  };
  const handleClear = () => {
    setTodos([]);
    setKeyword('');
    textInput.current.focus();
  };
  const handleRemove = index => {
    let newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
    <div>
      <h2>Todo List Correct Key Props</h2>
      <input ref={textInput} onChange={handleChange} value={keyword}></input>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleClear}>Clear</button>
      <hr />
      <ul>
        {todos.map((todo, i) => (
          <li key={i} onClick={() => handleRemove(i)}>
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
};
