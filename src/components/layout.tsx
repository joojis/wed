import { Flex, FlexProps } from "@chakra-ui/layout";
import { ReactNode } from "react";
import { FormalText } from "./texts";

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
    <FormalText
      fontSize="x-large"
      fontWeight={500}
      color="#9e7541"
      borderBottom={"1.5px solid #9e7541"}
      paddingTop="2rem"
      paddingLeft="1.5rem"
      paddingRight="1.5rem"
    >
      {children}
    </FormalText>
  );
};
