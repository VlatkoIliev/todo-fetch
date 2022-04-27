import React, { useState } from 'react';
import Product from './Product';
import axios from 'axios';
const URL = 'https://jsonplaceholder.typicode.com/todos';

const obj = {
  userId: 1,
  id: 1,
  title: 'delectus aut autem',
  completed: false,
};

const ProductList = ({ todos }) => {
  const [filteredTodos, setFilteredTodos] = useState(todos);
  const [filterBy, setFilterBy] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [objekt, setObjekt] = useState(obj);

  // fetchData = () => {
  //   this.setState({ loading: true });
  //   this.setState({ error: false });
  //   axios
  //     .get(URL)
  //     .then((response) => {
  //       const todosRes = response.data;
  //       this.setState({ todos: todosRes });
  //       this.setState({ loading: false });
  //     })
  //     .catch((error) => console.log(error));
  // };

  // componentDidMount() {
  //   this.fetchData();
  // }

  const updateSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };
  const updateFilter = (e) => {
    setFilterBy(e.target.value);
    console.log(filteredTodos);
    console.log(objekt);
  };

  // product.name
  const searchbarFilterItems = () => {
    return filteredTodos.filter((todo) =>
      todo.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const dropDownFilter = (todos) => {
    const str = filterBy;

    if (str === 'All') {
      return todos;
    } else if (str === 'Completed') {
      return todos.filter((todo) => todo.completed);
    } else if (str === 'Pending') {
      return todos.filter((todo) => !todo.completed);
    }
  };

  // const dropDownFilteredItems = this.dropDownFilterItems();
  const searchBarFilter = searchbarFilterItems();

  const filtered = dropDownFilter(searchBarFilter);
  return (
    <div>
      <div>
        <div>{filteredTodos.length}</div>
        <label>
          <strong>Filter:</strong>
          <select value={filterBy} onChange={updateFilter}>
            <option>All</option>
            <option>Completed</option>
            <option>Pending</option>
          </select>
        </label>
      </div>
      <div>
        Search for items:
        <input onChange={updateSearchTerm} placeholder='Search by title..' />
      </div>
      <ul>
        {filtered.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};
export default ProductList;
