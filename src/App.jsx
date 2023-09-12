import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import AppRoutes from './utils/Routes';
import Navbar from './components/SiteStructure/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
    <header>
      <h1>WulfCo Shop</h1>
    </header>
    <div className="container">
      <AppRoutes />
    </div>
  </Router>
);
};

export default App;
