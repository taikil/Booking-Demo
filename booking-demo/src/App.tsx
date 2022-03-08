import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/comfortaa"; // Defaults to weight 400.
import "@fontsource/raleway/400.css";
import { Home } from "./pages/Home";
import { theme } from "./style/theme";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Home />
  </ChakraProvider>
);
