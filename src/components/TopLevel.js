import React, { Component } from 'react';
import ProductList from './ProductList';
import axios from 'axios';
const URL = 'https://jsonplaceholder.typicode.com/todos';

export default class TopLevel extends Component {
  state = {
    todos: [],
    loading: false,
    error: false,
  };

  fetchData = () => {
    this.setState({ loading: true });
    this.setState({ error: false });
    axios
      .get(URL)
      .then((response) => {
        const todosRes = response.data;
        this.setState({ todos: todosRes });
        this.setState({ loading: false });
      })
      .catch((error) => console.log(error));
  };

  componentDidMount() {
    this.fetchData();
  }
  render() {
    return (
      <div>
        <ProductList todos={this.state.todos} />
      </div>
    );
  }
}
