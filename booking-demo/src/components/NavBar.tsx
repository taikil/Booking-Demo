import {
  Button,
  Flex,
  Heading,
  HStack,
  Link,
  StackDivider,
} from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import React from "react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";

export const NavBar: React.FC = () => {
  return (
    <Flex bgColor={"teal.300"}>
      <Button variant={"ghost"} borderRadius={"20px"}>
        <ReactLink to="/">
          <Heading>BookMate</Heading>
        </ReactLink>
      </Button>
      <HStack ml={"auto"} divider={<StackDivider />}>
        <ReactLink to="Book">
          <Link>Book</Link>
        </ReactLink>
        <Link>Contact</Link>
        <ColorModeSwitcher justifySelf="flex-end" />
      </HStack>
    </Flex>
  );
};
