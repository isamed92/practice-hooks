import React, { useEffect, useReducer } from 'react';

import './styles.css';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';



const init = () => JSON.parse(localStorage.getItem('todos')) || [];


export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos))
  }, [todos])

  const handleDelete = (id) => dispatch({type: 'remove', payload: id})

  const handleAddTodo = (newTodo) => {
    dispatch({type:'add', payload: newTodo})
  }

  
  const handleToggle = (id) => {
    dispatch({type: 'toggle', payload: id})
  }



  return (
    <div>
      <h1>Todo app ({todos.length}) </h1>
      <hr />
      <div className='row'>
        <div className='col-7'>
          <TodoList todos={todos} handleDelete={handleDelete} handleToggle={handleToggle} />
        </div>
        <div className='col-5'>
        <TodoAdd handleAddTodo={handleAddTodo} />
        </div>
      </div>
    </div>
  );
};
