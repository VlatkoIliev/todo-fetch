import React from 'react';
import { FaToggleOn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TodoItem = ({ item, handleDelete, handleToggle }) => {
  const { id, userId } = item;

  return (
    <div>
      <li className='list-item'>
        <span className='title'>{item.title}</span>

        <span>
          <button onClick={() => handleDelete(id)} className='btn-delete'>
            Delete
          </button>
        </span>
        <span>
          <button onClick={() => handleToggle(id)}>
            <FaToggleOn />
          </button>
        </span>
        <span>{item.completed ? 'completed' : 'pending'}</span>
        <Link to={`/users/${userId}`} className='btn-primary'>
          User Details
        </Link>
      </li>
    </div>
  );
};

export default TodoItem;
