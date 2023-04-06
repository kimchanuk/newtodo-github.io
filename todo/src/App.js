import logo from './logo.svg';
import './App.css';
import './components/Template.css';
import { useState } from 'react';
import data from './data';
import Template from './components/Template';
import TodoList from './components/TodoList';
import { MdAddCircle } from 'react-icons/md';
import TodoInsert from './components/TodoInsert';

let nextId = 4;

function App() {
  const [selectedTodo, setselectedTodo] = useState(null);
  const [todos, setTodos] = useState(data);
  const [inserToggle, setinserToggle] = useState(false);

  const onInsertToggle = () => {
    if (selectedTodo) {
      setselectedTodo(null);
    }
    setinserToggle(prev => !prev);
  };

  const onInsertTodo = text => {
    if (text === '') {
      return alert('할 일을 입력하세요');
    } else {
      const todo = {
        id: nextId,
        text,
        checked: false,
      };
      setTodos(todos => todos.concat(todo));
      nextId++;
    }
  };

  const onCheckToggle = id => {
    setTodos(todos =>
      todos.map(todo =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  const onChangeSelectedTodo = todo => {
    setselectedTodo(todo);
  };

  const onRemove = id => {
    onInsertToggle();
    setTodos(todos => todos.filter(todo => todo.id !== id));
  };

  const onUpdate = (id, text) => {
    onInsertToggle();
    setTodos(todos =>
      todos.map(todo => (todo.id === id ? { ...todo, text } : todo))
    );
  };

  return (
    <>
      <Template todoLength={todos.length} />
      <TodoList
        todos={todos}
        onCheckToggle={onCheckToggle}
        onInsertToggle={onInsertToggle}
        onChangeSelectedTodo={onChangeSelectedTodo}
      />
      <div className='add-todo-button' onClick={onInsertToggle}>
        <MdAddCircle />
      </div>
      {inserToggle && (
        <TodoInsert
          selectedTodo={selectedTodo}
          onInsertToggle={onInsertToggle}
          onInsertTodo={onInsertTodo}
          onRemove={onRemove}
          onUpdate={onUpdate}
        />
      )}
    </>
  );
}

export default App;
