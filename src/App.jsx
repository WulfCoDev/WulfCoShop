import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import AppRoutes from './utils/Routes';
import Navbar from './components/SiteStructure/Navbar';
import { CartProvider } from './components/User/CartContext';
import { AuthProvider } from './components/User/AuthContext';

const App = () => {
  return (
    <Router>
      <AuthProvider>
      <CartProvider>
      
    <div className="container"><Navbar />
      <AppRoutes />
    </div>
    </CartProvider>
    </AuthProvider>
  </Router>
);
};

export default App;
