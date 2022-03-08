import {
  Button,
  Container,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  VStack,
} from "@chakra-ui/react";
import React from "react";

interface ConfirmButtonProps {
  day: number;
  month: number;
  year: number;
  price: number;
}

export const ConfirmButton: React.FC<ConfirmButtonProps> = ({
  day,
  month,
  year,
  price,
}) => {
  return (
    <Popover placement="top-start">
      <PopoverTrigger>
        <Button
          marginTop={4}
          width={"520px"}
          colorScheme={"teal"}
          variant={"outline"}
          borderRadius={"20px"}
        >
          Confirm Booking
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader fontWeight="semibold">Booking Confirmed!</PopoverHeader>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody>
          <VStack>
            <Container>
              Date Of Booking: {day}/{month}/{year}
            </Container>
            <Container>Total Price: {price}</Container>
            <Container>Thank you for booking with us!</Container>
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
