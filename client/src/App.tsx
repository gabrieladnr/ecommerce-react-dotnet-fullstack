import { useState } from "react" 
import { Fragment } from "react/jsx-runtime" 

function App() {

  // useState initializes the `products` state as an array of product objects
  // Each product has a `name` and `price` property
  // `setProducts` is a function to update the `products` state
  const [products, setProducts] = useState([
    { name: 'product1', price: 100.00 }, // Initial product
    { name: 'product2', price: 200.00 }  // Initial product
  ]);

  // Function to add a new product dynamically
  const addProduct = () => {
    // Using `setProducts` with a function to access the previous state (`prevState`)
    setProducts(prevState => [
      ...prevState, // Spread operator to retain all existing products
      {
        name: 'product' + (prevState.length + 1), // Dynamically generate a new product name
        price: (prevState.length * 100) + 100 // Calculate price based on product count
      }
    ]);
  };

  return (
    <Fragment>
      <h1 style={{ color: "blueviolet" }}>Re-store</h1> 
      <ul>
        {/* Iterate through the `products` array using `map` to render each product */}
        {products.map((item, index) => (
          // `key` is required for React to efficiently update and track list items
          <li key={index}>
            {item.name} - {item.price}
          </li>
        ))}
      </ul>
      <button onClick={addProduct}>Add Product</button> 
    </Fragment>
  );
}

export default App; 
