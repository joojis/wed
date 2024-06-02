import { Icon } from "@chakra-ui/icon";
import { Box, Flex } from "@chakra-ui/layout";
import { FiMapPin } from "react-icons/fi";
import { venue } from "../data";
import { FormalText } from "./texts";

export const VenueAddress = () => {
  return (
    <Flex alignItems="flex-start" gap={2.5}>
      <Icon as={FiMapPin} boxSize="1.6rem" />
      <Box>
        <FormalText fontSize="large" fontWeight="600">
          {venue.location.addressDetail}
        </FormalText>
        <FormalText
          fontSize="large"
          fontWeight="400"
          color="gray"
          marginTop="1.5"
        >
          {venue.location.address}
        </FormalText>
      </Box>
    </Flex>
  );
};
