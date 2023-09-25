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