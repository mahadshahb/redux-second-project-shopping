import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import NavBar from './components/NavBar';
import './index.css';
import store from './store/store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    // <React.Fragment>
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/cart' exact element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </Provider>
    // </React.Fragment>
  )
}

export default App;