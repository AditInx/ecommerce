import { useEffect, useState } from "react";

function useProductData() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const json = await response.json();
        setProducts(json.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchData();
  }, []);

  return { products, setProducts }; 
}

export default useProductData;
