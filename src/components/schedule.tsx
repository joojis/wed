import { Flex } from "@chakra-ui/react";
import { schedule } from "../data";

export const Schedule = () => {
  return <Flex justifyContent={"center"}>{schedule.detail}</Flex>;
};
