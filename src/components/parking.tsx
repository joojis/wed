import { Icon } from "@chakra-ui/icon";
import { Box, Flex } from "@chakra-ui/layout";
import { FaSquareParking } from "react-icons/fa6";
import { FormalText } from "./texts";

export const Parking = () => {
  return (
    <Flex alignItems="flex-start" gap={2.5}>
      <Icon as={FaSquareParking} boxSize="1.6rem" />
      <Box>
        <FormalText fontSize="large" fontWeight="600">
          주차 90분 무료
        </FormalText>
      </Box>
    </Flex>
  );
};
