import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import React from 'react';

// import { Container } from './styles';

type Props = {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
};
const ModalForm: React.FC<Props> = ({ title, isOpen, onClose, children }) => {
  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalForm;
