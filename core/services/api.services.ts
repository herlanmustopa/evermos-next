const BASE_URL = "https://fakestoreapi.com";

const fetchInstance = async (path: string) => {
  try {
    const response = await fetch(`${BASE_URL}${path}`);
    console.log(response);

    if (!response.ok) {
      // throw new Error(`HTTP error! Status: ${response.status}`);
      return [];
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    throw error;
    return [];
  }
};

export async function fetchProducts() {
  try {
    const data = fetchInstance("/products");
    return data;
  } catch (errors) {
    return errors;
  }
}
export async function fetchProductById(id: string) {
  try {
    const data = fetchInstance(`/products/${id}`);
    console.log(data);
    return data;
  } catch (errors) {
    return errors;
  }
}

export const fetchAllCategoryProduct = async () => {
  const response = await fetch(`https://fakestoreapi.com/products/categories}`);
  if (!response.ok) throw new Error("Product not found");
  return response.json();
};
export const fetchCategoryProduct = async (categories: string) => {
  const response = await fetch(
    `https://fakestoreapi.com/products/${categories}`,
  );
  if (!response.ok) throw new Error("Product not found");
  return response.json();
};
