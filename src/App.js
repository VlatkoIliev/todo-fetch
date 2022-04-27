import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TodoList from './components/TodoList';
import DropMenu from './components/DropMenu';
import Filter from './components/Filter';
import Home from './pages/Home';
import Error from './pages/Error';
import UserDetails from './pages/UserDetails';
import Products from './components/Products';
import ProductList from './components/ProductList';
import Produkti from './components/Produkti';
import TopLevel from './components/TopLevel';

function App() {
  // return (
  //   <div>
  //     {/* <Produkti /> */}
  //     {/* <TopLevel /> */}
  //     {/* <ProductList /> */}
  //     {/* <Filter handleFilter={handleFilter} type={type} />
  //     <DropMenu fruit={fruit} /> */}
  //   </div>
  // );
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users/:id' element={<UserDetails />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
