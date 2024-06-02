import { ModalProps } from "@chakra-ui/modal";
import { useCallback, useState } from "react";

export const useModalActions = (): [
  Pick<ModalProps, "isOpen" | "onClose">,
  { open: () => void; close: () => void }
] => {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), [setIsOpen]);
  const close = useCallback(() => setIsOpen(false), [setIsOpen]);
  return [
    { isOpen, onClose: () => close() },
    { open, close },
  ];
};
