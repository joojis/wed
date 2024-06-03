import { Flex } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";

import InvitationW500 from "/invitation_w500.webp";
import InvitationW900 from "/invitation_w900.webp";
import LoveLetter from "/love-letter.webp";

export const InvitationImage = () => {
  return (
    <Flex position="relative" justifyContent="center">
      <Flex position="absolute" top="48px">
        <img src={LoveLetter} alt="Love Letter" width="60" height="60" />
      </Flex>
      <Flex maxWidth="400px" width="100%" direction={"column"} padding="1rem">
        <Image
          srcSet={`${InvitationW500} 500w, ${InvitationW900} 900w`}
          sizes="(min-width: 901px) 900px, 500px"
          src={InvitationW900}
          alt="We invite you"
          objectFit={"cover"}
          rounded="1rem"
          roundedTopLeft={200}
          roundedTopRight={200}
          boxShadow="0 1px 5px #917f58"
        />
      </Flex>
    </Flex>
  );
};
