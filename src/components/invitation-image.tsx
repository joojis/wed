import { Flex, Image } from "@chakra-ui/react";

import InvitationW500 from "/invitation_w500.webp";
import InvitationW900 from "/invitation_w900.webp";

export const InvitationImage = () => {
  return (
    <Flex position="relative" justifyContent="center">
      <Flex position="absolute" top="48px">
        <img
          src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Love%20Letter.png"
          alt="Love Letter"
          width="60"
          height="60"
        />
      </Flex>
      <Flex maxWidth="400px" width="100%" direction={"column"} padding="1rem">
        <Image
          srcSet={`${InvitationW500} 500w, ${InvitationW900} 900w`}
          sizes="(min-width: 901px) 900px, 500px"
          src={InvitationW900}
          objectFit={"cover"}
          rounded="1rem"
          roundedTopLeft={200}
          roundedTopRight={200}
        />
      </Flex>
    </Flex>
  );
};
