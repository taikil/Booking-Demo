import {
  Button,
  Flex,
  Heading,
  HStack,
  Link,
  StackDivider,
} from "@chakra-ui/react";
import React from "react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";

export const NavBar: React.FC = () => {
  return (
    <Flex bgColor={"teal.300"}>
      <Button variant={"ghost"} borderRadius={"20px"}>
        <Heading>BookMate</Heading>
      </Button>
      <HStack ml={"auto"} divider={<StackDivider />}>
        <Link>Book</Link>
        <Link>Contact</Link>
        <ColorModeSwitcher justifySelf="flex-end" />
      </HStack>
    </Flex>
  );
};
