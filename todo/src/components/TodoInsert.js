import React, { useEffect, useState } from 'react';
import { MdAddCircle } from 'react-icons/md';
import { TiTrash, TiPencil } from 'react-icons/ti';
import './TodoInsert.css';

const TodoInsert = ({
  onInsertToggle,
  onInsertTodo,
  selectedTodo,
  onRemove,
  onUpdate,
}) => {
  const [value, setvalue] = useState('');
  const onChange = e => {
    setvalue(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    onInsertTodo(value);
    setvalue('');
    onInsertToggle();
  };

  useEffect(() => {
    if (selectedTodo) {
      setvalue(selectedTodo.text);
    }
  }, [selectedTodo]);

  return (
    <div>
      <div className='background' onClick={onInsertToggle}></div>
      <form
        className='TodoInsertForm'
        onSubmit={
          selectedTodo
            ? () => {
                onUpdate(selectedTodo.id, value);
              }
            : onSubmit
        }
      >
        <input
          placeholder='Please type'
          type={value}
          onChange={onChange}
        ></input>
        {selectedTodo ? (
          <div className='rewrite'>
            <TiPencil
              onClick={() => {
                onUpdate(selectedTodo.id, value);
              }}
            ></TiPencil>
            <TiTrash
              onClick={() => {
                onRemove(selectedTodo.id);
              }}
            ></TiTrash>
          </div>
        ) : (
          <button type='submit'>
            <MdAddCircle />
          </button>
        )}
      </form>
    </div>
  );
};

export default TodoInsert;
