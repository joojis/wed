import { Flex, Text } from "@chakra-ui/react";

import type { Character } from "../data";

export const Host = ({ children }: { children: Character }) => {
  const { name, father, mother, relationship } = children;
  return (
    <Flex height="3rem" lineHeight="3rem">
      <Text fontSize="x-large" fontFamily={"GowunBatang-Regular"}>
        {father.name} · {mother.name}
      </Text>
      <Text fontSize="md" marginLeft="2" marginRight="4">
        의 {relationship}
      </Text>{" "}
      <Text fontSize="x-large" fontFamily={"GowunBatang-Regular"}>
        {name.substring(1)}
      </Text>
    </Flex>
  );
};
