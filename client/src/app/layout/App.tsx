import { Box, Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { Outlet } from "react-router";
import NavBar from "../../features/catalog/NavBar";

function App() {
  // Declare a state variable `products` to hold an array of product objects.
  const [darkMode, setDarkMode] = useState(false);

  const palletType = darkMode ? "dark" : "light"
  const theme = createTheme({
    palette: {
      mode: palletType,
      background: {
        default: (palletType == "light") ? "#eaeaea" : "#121212"
      }
    }
  })

  const toggleDarkMode = () => {
    setDarkMode((prevState) => !prevState)
  }




  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Box sx={{
        minHeight: '100vh',
        background: darkMode
          ? "radial-gradient(circle, #1e3aBa, #111B27)"
          : "radial-gradient(circle, #beacf9, #f0f9ff)",
        py: 6
      }}>  
      {/* FIXME: backgroung color not applying correctly */}
        <Container maxWidth='xl' sx={{ mt: 14 }}>
          <Outlet />
        </Container>
      </Box>
      <CssBaseline />
    </ThemeProvider>
  );

}

export default App;
