import { Button } from "@chakra-ui/button";
import { Icon } from "@chakra-ui/icon";
import { Flex, Heading, Text } from "@chakra-ui/layout";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalProps,
} from "@chakra-ui/modal";
import { FiExternalLink } from "react-icons/fi";
import { BankAccountNumberWithCopyButton } from "./bank-account-number-with-copy-button";
import { BankAccount } from "./types";
import { Card, CardHeader, CardBody } from "@chakra-ui/card";

export const GiftModal = ({
  title,
  bankAccounts,
  wishlistUrl,
  ...props
}: {
  title: string;
  bankAccounts: BankAccount[];
  wishlistUrl?: string;
} & Omit<ModalProps, "children">) => {
  return (
    <Modal isCentered {...props}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {title}
          <ModalCloseButton />
        </ModalHeader>
        <ModalBody paddingBottom="2rem">
          {bankAccounts.length === 0 && "준비중이에요!"}
          <Flex direction="column">
            {bankAccounts.map(({ accountHolder, bankName, accountNumber }) => (
              <Flex
                key={bankName + accountNumber}
                direction="column"
                gap="0.5rem"
              >
                {bankName} (예금주: {accountHolder})
                <BankAccountNumberWithCopyButton
                  bankAccountNumber={accountNumber}
                />
              </Flex>
            ))}
          </Flex>
          {wishlistUrl && (
            <Flex
              direction="column"
              alignItems="start"
              marginTop="2.5rem"
              gap="0.5rem"
            >
              <Card variant="filled" size="sm" width="100%">
                <CardHeader>
                  <Heading size="md">기억에 남는 선물하기</Heading>
                </CardHeader>
                <CardBody>
                  <Text size="sm" marginBottom="0.5rem">
                    선물하실 분은 결혼식 당일 축의대에 빈 봉투에 성함과
                    "선물"이라고 적어서 주시면 감사하겠습니다.
                  </Text>
                  <a href={wishlistUrl} target="_blank" rel="noreferrer">
                    <Button colorScheme="yellow" size="sm">
                      <Flex alignItems="center" gap="0.25rem">
                        카카오톡 선물하기 위시리스트 보러가기
                        <Icon as={FiExternalLink} boxSize="1.2rem" />
                      </Flex>
                    </Button>
                  </a>
                </CardBody>
              </Card>
            </Flex>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
