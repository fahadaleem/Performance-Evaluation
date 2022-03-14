import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
} from "@chakra-ui/react";

export const AlertBox = ({ message, onClose }: any) => {
  return (
    <Alert status="error" my={2} borderRadius="10px">
      <AlertIcon />
      <AlertTitle mr={2}>{message}</AlertTitle>
      <CloseButton
        position="absolute"
        right="8px"
        top="8px"
        onClick={onClose}
      />
    </Alert>
  );
};
