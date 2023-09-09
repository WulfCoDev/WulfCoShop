import './App.css'
import ProductList from './components/ProductList/ProductList'

function App() {


  return (
    <div>
      <header>
        <h1>WulfCo Shop</h1>
      </header>
      <div className="container">
        <ProductList />
      </div>
    </div>
  );
}

export default App
