import { Icon } from "@chakra-ui/icon";
import { Box, Flex } from "@chakra-ui/layout";
import { FaBusSimple } from "react-icons/fa6";
import { FormalText } from "./texts";

export const ShuttleBus = () => {
  return (
    <Flex alignItems="flex-start" gap={2.5}>
      <Icon as={FaBusSimple} boxSize="1.6rem" />
      <Box>
        <FormalText
          fontSize="large"
          fontWeight="600"
          display="inline"
          color="#8b50a4"
        >
          5호선 여의나루역
        </FormalText>
        <FormalText fontSize="large" fontWeight="600" display="inline">
          {" "}
          1번 출구 셔틀버스 수시 운행
        </FormalText>
      </Box>
    </Flex>
  );
};
