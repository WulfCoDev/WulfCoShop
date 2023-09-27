const api = 'https://fakestoreapi.com';

export const fetchProducts = async () => {
    const response = await fetch(api + '/products');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  };

  export const fetchSingleProduct = async (id) => {
    console.log("Fetching product with ID:", id);
    const response = await fetch(api + `/products/${id}`);
    if (!response.ok) {
      throw new Error('Network response failed');
    }
    return await response.json();
  }

  export const fetchJewelryProducts = async () => {
    const allProducts = await fetchProducts();
    return allProducts.filter(product => product.category === "jewelery");
  };

  export const fetchMensClothingProducts = async () => {
    const allProducts = await fetchProducts();
    return allProducts.filter(product => product.category === "men's clothing");
  };

  export const fetchWomensClothingProducts = async () => {
    const allProducts = await fetchProducts();
    return allProducts.filter(product => product.category === "women's clothing");
  };

  export const fetchElectronicProducts = async () => {
    const allProducts = await fetchProducts();
    return allProducts.filter(product => product.category === "electronics");
  };

  export const fetchFeaturedProducts = async () => {
    const allProducts = await fetchProducts();
    return allProducts.filter(product => product.category === "electronics");
  };

  export const fetchAllUsers = async () => {
    const response = await fetch(api + '/users');
    if (!response.ok) {
      throw new Error ('Failed to fetch users');
    }
    return await response.json();
  }

  export const fetchSingleUser = async (id) => {
    console.log ('fetching user with ID:', id);
    const response = await fetch(api + `/users/${id}`);
    if (!response.ok){
      throw new Error ('Failed to fetch user with ID:',id);
    }
    return await response.json();
  }