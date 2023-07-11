import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { Products } from './Pages/Products';
import { Cart } from './Pages/Cart';
import { Contact } from './Pages/Contact';
import { Home } from './Pages/Home';
import { PageNotFound } from './Pages/PageNotFound';
import { ProductView } from './Pages/ProductView';
import { NavBar } from './Components/NavBar';
import { About } from './Pages/About';
import { AppProvider } from './Context/productContext';
import { Login } from './Pages/Login';
import { Register } from './Pages/Register';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/productview/:id' element={<ProductView />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<PageNotFound />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
