import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/comfortaa"; // Defaults to weight 400.
import "@fontsource/raleway/400.css";
import { Home } from "./pages/Home";
import { theme } from "./style/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Book } from "./pages/Book";
export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/book" element={<Book />}></Route>
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
);
