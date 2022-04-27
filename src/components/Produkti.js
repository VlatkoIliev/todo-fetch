import React, { Component } from 'react';

const items = [
  {
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: 'quis ut nam facilis et officia qui',
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: 'fugiat veniam minus',
    completed: false,
  },
  {
    userId: 1,
    id: 4,
    title: 'et porro tempora',
    completed: true,
  },
];

export default class Produkti extends Component {
  state = {
    filterBy: 'All',
    produkti: items,
  };
  updateFilter = (e) => {
    console.log(e.target.value);
    this.setState({ filterBy: e.target.value });
  };

  dropFilter = () => {
    let str = this.state.filterBy;
    if (str === 'All') {
      return items;
    } else if (str === 'Pending') {
      return items.filter((item) => !item.completed);
    } else if (str === 'Completed') {
      return items.filter((item) => item.completed);
    }

    // let filtered = [...this.state.produkti];
    // if (this.state.filterBy === 'Completed') {
    //   filtered = filtered.filter((item) => item.completed);
    // } else if (this.state.filterBy === 'Pending') {
    //   filtered = filtered.filter((item) => !item.completed);
    // }
    // this.setState({ produkti: filtered });
  };
  render() {
    const filtered = this.dropFilter();
    return (
      <div>
        <label>
          <strong>Filter:</strong>
          <select value={this.state.filterBy} onChange={this.updateFilter}>
            <option>All</option>
            <option>Completed</option>
            <option>Pending</option>
          </select>
        </label>
        {filtered.map((item) => (
          <div key={item.id}>{item.title}</div>
        ))}
      </div>
    );
  }
}
