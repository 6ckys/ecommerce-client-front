import logo from './logo.svg';
import './App.css';
import Home from './views/home';
import Layout from './views/layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Product from './views/product';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route path='/' element={<Layout />}></Route>
          </Route>
          <Route path='/product/:id' element={<Product />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
