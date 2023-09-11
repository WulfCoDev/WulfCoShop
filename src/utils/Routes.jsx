import { Route, Routes } from 'react-router-dom';
import Homepage from '../components/SiteStructure/Homepage';
import ProductDetails from '../components/ProductDetails/ProductDetails';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      
    </Routes>
  );
};

export default AppRoutes;