import { Icon } from "@chakra-ui/icon";
import { Box, Flex } from "@chakra-ui/layout";
import { FaTrainSubway } from "react-icons/fa6";
import { FormalText } from "./texts";

export const Subway = () => {
  return (
    <Flex alignItems="flex-start" gap={2.5}>
      <Icon as={FaTrainSubway} boxSize="1.6rem" />
      <Box>
        <FormalText
          fontSize="large"
          fontWeight="600"
          display="inline"
          color="#aa9872"
        >
          9호선 국회의사당
        </FormalText>
        <FormalText fontSize="large" fontWeight="600" display="inline">
          {" "}
          3번 출구 (도보 5분)
        </FormalText>
      </Box>
    </Flex>
  );
};
