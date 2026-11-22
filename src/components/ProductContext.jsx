
/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react';

import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../services/productService';

export const ProductContext = createContext(null);

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

    // Fetch products from the API
  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await getProducts();
      setProducts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

    // Fetch products when the provider first loads
  useEffect(() => {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      fetchProducts();
    }, [fetchProducts]);

    // Add a product
  const addProduct = async (product) => {
    try {
      setLoading(true);
      setError(null);

      const newProduct = await createProduct(product);
      setProducts((currentProducts) => [
        ...currentProducts,
        newProduct,
      ]);

      return newProduct;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

    // Edit a product
  const editProduct = async (id, updates) => {
    try {
      setLoading(true);
      setError(null);

      const updatedProduct = await updateProduct(id, updates);

      setProducts((currentProducts) =>
        currentProducts.map((product) =>
          String(product.id) === String(id)
            ? updatedProduct
            : product
        )
      );

      return updatedProduct;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

    // Remove a product
  const removeProduct = async (id) => {
    try {
      setLoading(true);
      setError(null);

      await deleteProduct(id);

      setProducts((currentProducts) =>
        currentProducts.filter(
          (product) => String(product.id) !== String(id)
        )
      );
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const value = {
    products,
    loading,
    error,
    fetchProducts,
    addProduct,
    editProduct,
    removeProduct,
  };

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
}
