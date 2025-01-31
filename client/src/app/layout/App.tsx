import { useEffect, useState } from "react";
import { Fragment } from "react/jsx-runtime";
import { Product } from "../models/product";
import Catalog from "../../feature/catalog/Catalog";

function App() {
  // Declare a state variable `products` to hold an array of product objects.
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

  const addProduct = () => {
    setProducts((prevState) => [
      ...prevState, // Retain all the current products
      {
        name: "product" + (prevState.length + 1), // Generate a new product name
        price: (prevState.length * 100) + 100, // Calculate the price based on the number of products
        description: "string",
        pictureUrl: "string",
        type: "string",
        brand: "string",
        quantityInStock: 100,
        id: prevState.length + 1
      },
    ]);
  };

  return (
    <Fragment>
      <h1 style={{ color: "blueviolet" }}>Re-store</h1>
      <Catalog products={products} addProduct={addProduct}/>      
    </Fragment>
  );
}

export default App;
