import { Button } from "@chakra-ui/button";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useToast } from "@chakra-ui/toast";

export const BankAccountNumberWithCopyButton = ({
  bankAccountNumber,
}: {
  bankAccountNumber: string;
}) => {
  const toast = useToast();
  return (
    <InputGroup size="lg">
      <Input
        pr="4.5rem"
        type="text"
        value={bankAccountNumber}
        contentEditable="false"
      />
      <InputRightElement width="6rem">
        <CopyToClipboard
          text={bankAccountNumber}
          onCopy={() =>
            toast({
              title: "계좌번호를 복사했어요.",
              status: "success",
              isClosable: true,
            })
          }
        >
          <Button h="2rem" size="sm" colorScheme="green">
            복사하기
          </Button>
        </CopyToClipboard>
      </InputRightElement>
    </InputGroup>
  );
};
