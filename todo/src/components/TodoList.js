import React from 'react';
import Todoitem from './TodoItem';
import './TodoList.css';

const TodoList = ({
  todos,
  onCheckToggle,
  onInsertToggle,
  onChangeSelectedTodo,
}) => {
  return (
    <div className='todoList'>
      {todos.map(todo => (
        <Todoitem
          todo={todo}
          key={todo.id}
          onCheckToggle={onCheckToggle}
          onInsertToggle={onInsertToggle}
          onChangeSelectedTodo={onChangeSelectedTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
