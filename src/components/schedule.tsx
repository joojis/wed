import { Flex, Text } from "@chakra-ui/react";
import { schedule, venue } from "../data";

export const Schedule = () => {
  return (
    <Flex
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={1.5}
      marginTop={5}
    >
      <Text fontSize="x-large" fontFamily="GangwonEdu_OTFBoldA">
        {schedule.detail}
      </Text>
      <Text fontSize="large" fontFamily="GangwonEdu_OTFBoldA">
        {venue.location.addressDetail}
      </Text>
    </Flex>
  );
};
