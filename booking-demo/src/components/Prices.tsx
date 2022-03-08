import {
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/react";
import React from "react";

export const Prices: React.FC = () => {
  return (
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
          <Td>Weekends</Td>
          <Td isNumeric>$150</Td>
        </Tr>
      </Tbody>
    </Table>
  );
};
