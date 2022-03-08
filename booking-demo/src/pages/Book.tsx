import { CalendarIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  Container,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  StackDivider,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { ConfirmButton } from "../components/ConfirmButton";
import { NavBar } from "../components/NavBar";

export const Book: React.FC = () => {
  const [value, onChange] = useState(new Date());
  const [startTime, setStartTime] = useState(9);
  const [endTime, setEndTime] = useState(11);
  const [price, setPrice] = useState(0);

  return (
    <Box>
      <NavBar />
      <Center mt={2} fontSize={"2xl"} fontWeight={"bold"}>
        Book A Session
      </Center>
      <Container>
        <VStack mt={4} divider={<StackDivider />}>
          <Container>
            Date: <CalendarIcon ml={2} />
          </Container>
          <Calendar onChange={onChange} value={value} />
          {value ? (
            <Container>
              Appointment Date: {value.getDate()}/{value.getMonth() + 1}/
              {value.getFullYear()}
            </Container>
          ) : (
            <Container>No Date Selected</Container>
          )}
          <Container>
            <RangeSlider
              defaultValue={[startTime, endTime]}
              min={9}
              max={18}
              step={1}
              colorScheme={"cyan"}
              onChange={(val) => (setStartTime(val[0]), setEndTime(val[1]))}
            >
              <RangeSliderTrack>
                <RangeSliderFilledTrack />
              </RangeSliderTrack>
              <RangeSliderThumb boxSize={6} index={0} />
              <RangeSliderThumb boxSize={6} index={1} />
            </RangeSlider>
            Appointment Duration: {startTime}:00 - {endTime}:00 (
            {endTime - startTime} Hours)
          </Container>
          {value.getDay() == 6 ? (
            <Container>
              Total Price: ${(endTime - startTime) * 150} CAD
            </Container>
          ) : value.getDay() == 0 ? (
            <Container>
              Total Price: ${(endTime - startTime) * 150} CAD
            </Container>
          ) : (
            <Container>
              Total Price: ${(endTime - startTime) * 100} CAD
              {/* {setPrice(endTime - startTime * 100)} */}
            </Container>
          )}
          <ConfirmButton
            day={value.getDay()}
            month={value.getMonth() + 1}
            year={value.getFullYear()}
            price={0}
          />
        </VStack>
      </Container>
    </Box>
  );
};
