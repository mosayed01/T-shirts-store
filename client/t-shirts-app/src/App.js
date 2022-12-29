import { Button, Container, CssBaseline, Stack, Box } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import Appbar from "./components/Appbar";
import { useEffect } from "react";
import theme from "./Styles/theme";
import Banner from "./pages/HomePage/Banner";
import Products from "./pages/products/Products";
import AppDrawer from "./components/Appbar/Drawer";
import { UIProvider } from "./context/ui";
import SearchBox from "./components/Appbar/Search";
//import Footer from "./components/footer/Footer";
import Categories from "./pages/categories/Categories";
import Cart from "./pages/Cart";
function App() {
  useEffect(() => {
    document.title = "T-STORE";
  }, []);
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="xl" sx={{ background: "#fff" }}>
          <Stack>
            <UIProvider>
              <Appbar />
              <AppDrawer />
              <Box sx={{ marginTop: "70px" }}>
                <Banner />
              </Box>
              {/*
        <Products/> */}
              <SearchBox />
              
              <Categories />
              <Cart/>
              {/* <Footer /> */}
            </UIProvider>
          </Stack>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
