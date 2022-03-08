import { Box, ChakraProvider, Grid, VStack } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import theme from "./theme";
import "@fontsource/abeezee";

export const App = () => (
  <ChakraProvider theme={theme}>
    <NavBar></NavBar>

    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <VStack></VStack>
      </Grid>
    </Box>
  </ChakraProvider>
);
