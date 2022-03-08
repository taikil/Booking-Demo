import { CalendarIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Container,
  StackDivider,
  Table,
  TableCaption,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { NavBar } from "../components/NavBar";
import { Navigate } from "react-router";

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
            Book an appointment with one of our experts in just a few clicks!
          </Container>
          <Container>Our Rates:</Container>
          <Table variant="striped" colorScheme="teal">
            <TableCaption>*Prices are in CAD</TableCaption>
            <Thead>
              <Tr>
                <Th>Time of Week</Th>
                <Th isNumeric>Hourly Rate</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Weekdays</Td>
                <Td isNumeric>$100</Td>
              </Tr>
              <Tr>
                <Td>feet</Td>
                <Td isNumeric>$150</Td>
              </Tr>
            </Tbody>
          </Table>
          <Button
            marginTop={4}
            width={"520px"}
            colorScheme={"teal"}
            variant={"outline"}
            borderRadius={"20px"}
            onClick={() => {
              Navigate({ to: `/` });
            }}
          >
            {" "}
            Book Now!
          </Button>
        </VStack>
      </Container>
    </Box>
  );
};
