import { Icon } from "@chakra-ui/icon";
import { Box, Flex } from "@chakra-ui/layout";
import { FaRegMap } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";
import { FormalText } from "./texts";

export const DownloadRoughMap = () => {
  return (
    <Flex alignItems="flex-start" gap={2.5}>
      <Icon as={FaRegMap} boxSize="1.6rem" />
      <Box>
        <a
          href="https://www.thepartyum.com/img/tow_thepartyum_counselling_list.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <Flex alignItems="center" gap="0.25rem">
            <FormalText fontSize="large" fontWeight="600" display="inline">
              약도 다운로드
            </FormalText>
            <Icon as={FiDownload} boxSize="1.2rem" />
          </Flex>
        </a>
      </Box>
    </Flex>
  );
};
