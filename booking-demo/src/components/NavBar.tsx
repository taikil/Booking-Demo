import { Divider, Flex, Heading, HStack, Link } from "@chakra-ui/react";
import React from "react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  return (
    <Flex bgColor={"teal.300"}>
      <Heading>BookMate</Heading>
      <HStack
        divider={<Divider orientation="horizontal"></Divider>}
        ml={"auto"}
      >
        <Link>Book</Link>
        <Link>Contact</Link>
        <ColorModeSwitcher justifySelf="flex-end" />
      </HStack>
    </Flex>
  );
};
