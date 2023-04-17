import {
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  AlertDialog as ChackraAlertDialog,
  ThemeTypings,
} from '@chakra-ui/react';
import React from 'react';

type Props = {
  title: string;
  description: string;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  textCancel?: string;
  textConfirm?: string;
  colorSchemeConfirm?: ThemeTypings['colorSchemes'];
};

const AlertDialog: React.FC<Props> = ({
  isOpen,
  onClose,
  title,
  description,
  textCancel = 'Cancelar',
  textConfirm = 'Confirmar',
  colorSchemeConfirm = 'blue',
  onConfirm,
}) => {
  const cancelRef = React.useRef(null);

  return (
    <ChackraAlertDialog
      motionPreset="scale"
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      isOpen={isOpen}
      isCentered
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            {title}
          </AlertDialogHeader>

          <AlertDialogBody>{description}</AlertDialogBody>

          <AlertDialogFooter>
            <Button onClick={onClose} ref={cancelRef}>
              {textCancel}
            </Button>
            <Button
              colorScheme={colorSchemeConfirm}
              onClick={() => {
                onConfirm();
                onClose();
              }}
              ml={3}
            >
              {textConfirm}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </ChackraAlertDialog>
  );
};

export default AlertDialog;
