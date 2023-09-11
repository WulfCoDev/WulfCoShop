import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import AppRoutes from './utils/Routes';

const App = () => {
  return (
    <Router>
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
