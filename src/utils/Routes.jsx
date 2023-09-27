import { Route, Routes } from 'react-router-dom';
import Homepage from '../components/SiteStructure/Homepage';
import ProductDetails from '../components/ProductDetails/ProductDetails';
import Register from '../components/User/Register';
import LoginForm from '../components/User/Login';
import CheckoutPage from '../components/SiteStructure/Checkout/CheckoutPage';
import CheckoutSucess from '../components/SiteStructure/Checkout/CheckoutSuccess';
import Jewelry from '../components/SiteStructure/Jewelery';
import MensClothing from '../components/SiteStructure/MClothing';
import WomensClothing from '../components/SiteStructure/WClothing';
import Electronics from '../components/SiteStructure/Electronics';
import AllProducts from '../components/SiteStructure/ShopAll';
import ProfilePage from '../components/User/Profile';
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/order-success" element={<CheckoutSucess />} />
      <Route path="/category/jewelery" element={<Jewelry />} />
      <Route path="/category/mens-clothing" element={<MensClothing />} />
      <Route path="/category/womens-clothing" element={<WomensClothing />} />
      <Route path="/category/electronics" element={<Electronics />} />
      <Route path="/shopall" element={<AllProducts />} />
      <Route path="/profile" element={<ProfilePage />} />
      
    </Routes>
  );
};

export default AppRoutes;