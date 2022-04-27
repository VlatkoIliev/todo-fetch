import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoItem from './TodoItem';
import Loading from './Loading';
const URL = 'https://jsonplaceholder.typicode.com/todos';

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchData = () => {
    setLoading(true);
    setError(false);
    axios
      .get(URL)
      .then((response) => {
        const todos = response.data;
        setTodoList(todos);
        setLoading(false);
      })
      .catch((error) => setError(true));
  };

  useEffect(() => {
    fetchData();
  }, []);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       setLoading(true);
  //       setError(false);
  //       try {
  //         const result = await fetch(URL);
  //         const data = await result.json();
  //         setTodoList(data);
  //       } catch (error) {
  //         setError(true);
  //       }
  //       setLoading(false);
  //     };
  //     fetchData();
  //   }, []);

  // funkcija za filtriranje na todo list

  const handleToggle = (id) => {
    const filtered = [...todoList];
    const item = filtered.find((item) => item.id === id);
    item.completed = !item.completed;
    setTodoList(filtered);
  };

  const handleDelete = (id) => {
    const arr = todoList.filter((item) => item.id !== id);
    setTodoList(arr);
  };

  const searchbarFilterItems = () => {
    return todoList.filter((todo) =>
      todo.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <p>Something is not right</p>;
  }

  if (todoList.length === 0) {
    return (
      <div className='load'>
        <h3>Empty list</h3>
        <button onClick={fetchData} className='btn-primary'>
          Load list
        </button>
      </div>
    );
  }
  const filteredList = searchbarFilterItems();
  return (
    <>
      <div className='list-container'>
        <div className='search'>
          <h4> Search todos:</h4>
          <input
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder='Search by title..'
          />
        </div>

        <div className='list'>
          <ul>
            {filteredList.map((item) => {
              return (
                <TodoItem
                  key={item.id}
                  item={item}
                  handleDelete={handleDelete}
                  handleToggle={handleToggle}
                />
              );
            })}
          </ul>
          <div>
            <button onClick={() => setTodoList([])} className='btn-delete'>
              Clear todo list
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoList;
