import { useEffect, useState } from "react"; 
import { Fragment } from "react/jsx-runtime"; 

function App() {
  // Declare a state variable `products` to hold an array of product objects.
  // Each product object has `name` (string) and `price` (number) properties.
  // `setProducts` is used to update the state.
  const [products, setProducts] = useState<{ name: string; price: number }[]>([]);

  // useEffect is used to perform side effects (e.g., fetching data).
  // Runs once when the component mounts because of the empty dependency array `[]`.
  useEffect(() => {
    // Fetch products from the API
    fetch("http://localhost:5000/api/products")
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
