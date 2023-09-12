import { Route, Routes } from 'react-router-dom';
import Homepage from '../components/SiteStructure/Homepage';
import ProductDetails from '../components/ProductDetails/ProductDetails';
import Register from '../components/User/Register';
import LoginForm from '../components/User/Login';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<LoginForm />} />
      
    </Routes>
  );
};

export default AppRoutes;