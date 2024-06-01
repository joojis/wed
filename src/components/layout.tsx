import { Flex, FlexProps } from "@chakra-ui/react";
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
      color="#ba8f58"
      borderBottom={"1.5px solid #ba8f58"}
      paddingTop="2rem"
      paddingLeft="1.5rem"
      paddingRight="1.5rem"
    >
      {children}
    </FormalText>
  );
};
