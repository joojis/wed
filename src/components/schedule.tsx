import { Flex } from "@chakra-ui/react";

import { schedule, venue } from "../data";
import { AdorableText } from "./texts";

export const Schedule = () => {
  return (
    <Flex
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={1.5}
      marginTop={5}
    >
      <AdorableText fontSize="x-large">{schedule.detail}</AdorableText>
      <AdorableText fontSize="large">
        {venue.location.addressDetail}
      </AdorableText>
    </Flex>
  );
};
