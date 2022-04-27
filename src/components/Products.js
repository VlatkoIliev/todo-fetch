import React, { Component } from 'react';
import Product from './Product';

const products = [
  {
    id: 34,
    plussize: false,
    gender: 'Womens',
    type: 'dress',
  },

  {
    id: 44,
    plussize: true,
    gender: 'Mens',
    type: 'shirt',
  },
  {
    id: 33,
    plussize: true,
    gender: 'Mens',
    type: 'pants',
  },
  {
    id: 54,
    plussize: false,
    gender: 'Womens',
    type: 'dress',
  },
];

export default class Products extends Component {
  state = {
    products: products,
    showPlusSized: false,
    searchTerm: '',
    filterBy: 'All',
  };

  toggleShowPlusSizedOnly = () => {
    this.setState({ showPlusSized: !this.state.showPlusSized });
  };

  updateSearchTerm = (e) => {
    this.setState({
      searchTerm: e.target.value,
    });
  };
  updateFilter = (e) => {
    this.setState({ filterBy: e.target.value });
  };

  checkboxFilterItems = (products) => {
    return this.state.showPlusSized
      ? products.filter((product) => product.plussize)
      : products;
  };

  searchbarFilterItems = () => {
    return this.state.products.filter((product) =>
      product.type.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );
  };

  dropDownFilterItems = (products) => {
    if (this.state.filterBy === '') {
      return products;
    } else if (this.state.filterBy == 'Sizetrue') {
      return this.state.products.filter((product) => product.plussize);
    } else if (this.state.filterBy === 'Sizefalse') {
      return this.state.products.filter(
        (product) => product.plussize === false
      );
    }
  };

  //   dropDownFilterItems = (products) => {
  //     return this.state.filterBy === 'All'
  //       ? products
  //       : products.filter((product) => product.gender === this.state.filterBy);
  //   };
  render() {
    // const searchbarFilteredItems = this.searchbarFilterItems();
    // const searchbarAndDropdownFiltered = this.dropDownFilterItems(
    //   searchbarFilteredItems
    // );
    // const searchbarDropdownCheckboxFiltered = this.checkboxFilterItems(
    //   searchbarAndDropdownFiltered
    // );
    const dropDownFilteredItems = this.dropDownFilterItems();
    return (
      <div>
        <div>
          <label>Show plus sized only:</label>
          <input
            type='checkbox'
            checked={this.state.showPlusSized}
            onChange={this.toggleShowPlusSizedOnly}
          />
        </div>
        <div>
          <label>
            <strong>Filter:</strong>
            <select value={this.state.filterBy} onChange={this.updateFilter}>
              <option>All</option>
              <option>Sizetrue</option>
              <option>Sizefalse</option>
            </select>
          </label>
        </div>
        <div>
          Search for items:
          <input
            onChange={this.updateSearchTerm}
            placeholder='enter clothing type..'
          />
        </div>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    );
  }
}
