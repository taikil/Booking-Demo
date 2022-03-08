import { CalendarIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Container,
  StackDivider,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { Prices } from "../components/Prices";

export const Home: React.FC = () => {
  return (
    <Box>
      <NavBar />
      <Center mt={2} fontSize={"2xl"} fontWeight={"bold"}>
        Welcome to BookMate <CalendarIcon ml={2} />
      </Center>
      <Container mt={4}>
        <VStack ml={2} alignContent={"flex-start"} divider={<StackDivider />}>
          <Container>
            Book an appointment with one of our experts in just a few minutes!
          </Container>
          <Container>Our Rates:</Container>
          <Prices />
          <Container centerContent={true}>
            {" "}
            Our Hours: 9am-6pm | 7 days a week
          </Container>
          <Button
            marginTop={4}
            width={"520px"}
            colorScheme={"teal"}
            variant={"outline"}
            borderRadius={"20px"}
          >
            <Link to="Book"> Book Now!</Link>
          </Button>
        </VStack>
      </Container>
    </Box>
  );
};
