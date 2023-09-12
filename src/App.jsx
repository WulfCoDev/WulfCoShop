import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import AppRoutes from './utils/Routes';
import Navbar from './components/SiteStructure/Navbar';
import { CartProvider } from './components/User/CartContext';

const App = () => {
  return (
    <Router>
      <CartProvider>
      <Navbar />
    <header>
      <h1>WulfCo Shop</h1>
    </header>
    <div className="container">
      <AppRoutes />
    </div>
    </CartProvider>
  </Router>
);
};

export default App;
