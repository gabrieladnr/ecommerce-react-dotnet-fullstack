import { useEffect, useState } from "react";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";


export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);
  // Runs once when the component mounts because of the empty dependency array `[]`.
  useEffect(() => {
    // Fetch products from the API
    fetch("https://localhost:5000/api/products")
      .then((response) => response.json()) // Parse the JSON from the response
      .then((data) => setProducts(data)) // Update `products` state with the fetched data
      .catch((error) => {
        console.error("Error fetching products:", error); // Log any errors during fetch
      });
  }, []);
  
  return (

    <>
      <ProductList products={products} />
    </>
  )
}

