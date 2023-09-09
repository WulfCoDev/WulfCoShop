const api = 'https://fakestoreapi.com';

export const fetchProducts = async () => {
    const response = await fetch(api + '/products');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  };