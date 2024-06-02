import { Button } from "@chakra-ui/button";
import { Icon } from "@chakra-ui/icon";
import { Flex } from "@chakra-ui/layout";
import { FiGift } from "react-icons/fi";
import { FormalText } from "../texts";
import { GiftModal } from "./gift-modal";
import { BankAccount } from "./types";
import { useModalActions } from "./use-modal-actions";

export const GiftModalButton = ({
  children,
  bankAccounts,
  wishlistUrl,
}: {
  children: string;
  bankAccounts: BankAccount[];
  wishlistUrl?: string;
}) => {
  const [modalProps, modalActions] = useModalActions();
  return (
    <>
      <Button
        onClick={modalActions.open}
        size="lg"
        colorScheme="yellow"
        maxWidth="90vw"
      >
        <Flex alignItems="center" gap="0.5rem">
          <Icon as={FiGift} />
          <FormalText>{children}</FormalText>
        </Flex>
      </Button>
      <GiftModal
        title={children}
        bankAccounts={bankAccounts}
        wishlistUrl={wishlistUrl}
        {...modalProps}
      />
    </>
  );
};
