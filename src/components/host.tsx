import { Flex, Text } from "@chakra-ui/react";

import type { Character } from "../data";
import { RespectfulText } from "./texts";

export const Host = ({ children }: { children: Character }) => {
  const { name, father, mother, relationship } = children;
  return (
    <Flex height="3rem" lineHeight="3rem">
      <RespectfulText fontSize="x-large">
        {father.name} · {mother.name}
      </RespectfulText>
      <Text fontSize="md" marginLeft="2" marginRight="4">
        의 {relationship}
      </Text>{" "}
      <RespectfulText fontSize="x-large">{name.substring(1)}</RespectfulText>
    </Flex>
  );
};
