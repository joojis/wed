import { Flex, FlexProps, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

export const Item = ({
  children,
  justifyContent = "center",
  ...props
}: { children?: ReactNode } & Omit<FlexProps, "width">) => {
  return (
    <Flex width="100%" justifyContent={"center"} {...props}>
      <Flex maxWidth="640px" width="100%" direction={"column"}>
        <Flex justifyContent={justifyContent}>{children}</Flex>
      </Flex>
    </Flex>
  );
};

export const ItemTitle = ({ children }: { children: string }) => {
  return (
    <Text
      fontSize="x-large"
      fontWeight={500}
      color="#ba8f58"
      borderBottom={"1.5px solid #ba8f58"}
      paddingLeft={3}
      paddingRight={3}
      fontFamily={"Pretendard"}
    >
      {children}
    </Text>
  );
};
