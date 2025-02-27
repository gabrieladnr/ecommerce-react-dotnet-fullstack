import { Box, Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useEffect, useState } from "react";
import Catalog from "../../feature/catalog/Catalog";
import NavBar from "../../feature/catalog/NavBar";
import { Product } from "../models/product";

function App() {
  // Declare a state variable `products` to hold an array of product objects.
  const [products, setProducts] = useState<Product[]>([]);
  const darkMode = true;
  const palletType = darkMode ? "dark" : "light"
  const theme = createTheme({
    palette: {
      mode: palletType,
      background: {
        default: (palletType == "light") ? "#eaeaea" : "121212"
      }
    }
  })

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
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <NavBar />
        <Box sx={{ minHeight: '100vh', background: darkMode ? "121212" : "#eaeaea" }}>  // FIXME: background not aplying color
          <Container maxWidth='xl' sx={{ mt: 14 }}>
            <Catalog products={products} addProduct={addProduct} />
          </Container>
        </Box>
      </CssBaseline>
    </ThemeProvider>
  );

}

export default App;
