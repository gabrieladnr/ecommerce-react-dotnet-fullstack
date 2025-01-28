import { useEffect, useState } from "react";
import { Fragment } from "react/jsx-runtime";
import { Product } from "../models/product";

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

      <ul>
        {products.map((item, index) => (
          // Map over `products` to render each product as a list item.
          // Use `index` as the key (ensure unique keys in a real-world scenario).
          <li key={index}>
            {item.name} - {item.price} {/* Display product name and price */}
          </li>
        ))}
      </ul>

      <button onClick={addProduct}>Add Product</button>
    </Fragment>
  );
}

export default App;
