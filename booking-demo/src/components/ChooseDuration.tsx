import {
  Container,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
} from "@chakra-ui/react";
import React from "react";

export const ChooseDuration: React.FC = ({}) => {
  return (
    <Container>
      <RangeSlider
        defaultValue={[9, 11]}
        min={9}
        max={18}
        step={0.5}
        colorScheme={"teal"}
        onChangeEnd={(val) => val}
      >
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb boxSize={6} index={0} />
        <RangeSliderThumb boxSize={6} index={1} />
      </RangeSlider>
    </Container>
  );
};
