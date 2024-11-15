export const fetchProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  if (!response.ok) throw new Error("Failed to fetch products");
  return response.json();
};

export const fetchProductById = async (id: number) => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!response.ok) throw new Error("Product not found");
  return response.json();
};
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
