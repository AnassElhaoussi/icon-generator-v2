import { useEffect, useRef, useState } from "react";
import { ChromePicker } from "react-color";
import {
  DarkMode,
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Text,
  ModalOverlay,
  Flex,
  VStack,
} from "@chakra-ui/react";

const DashboardColorPicker = ({
  chosenColor,
  setChosenColor,
  onOpen,
  isOpen,
  onClose,
}: {
  chosenColor: string | null;
  setChosenColor: React.Dispatch<React.SetStateAction<string | null>>;
  onOpen: () => void;
  isOpen: boolean;
  onClose: () => void;
}) => {
  const focusRef = useRef(null);
  const [color, setColor] = useState<string>("")

  const saveColor = () => {
    setChosenColor(color)
    onClose()
  }

  return (
    <Modal finalFocusRef={focusRef} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        display="flex"
        flexDirection="column"
        gap="2rem"
        alignItems="start"
        borderRadius="xl"
        padding="1rem"
        backgroundColor="gray.900"
        className="font-poppins"
      >
        <VStack alignItems="start">
          <ModalHeader
            fontSize="2rem"
            fontWeight="black"
            textColor="gray.300"
            textAlign="start"
            lineHeight="3"
          >
            Pick a color
          </ModalHeader>
          <Text textColor="gray.600" fontSize="sm" paddingLeft="1.5rem">
            Customize the way you choose colors by using our color picker
          </Text>
        </VStack>
        <ModalCloseButton color="gray.200" />
        <ModalBody display="flex" flexDirection="column" gap={2}>
          <ChromePicker
            color={color}
            onChange={(color) => setColor(color?.hex)}
          />
          <Flex alignItems="center" gap={2}>
            <Text className="text-gray-200">
              You have chosen this color :{" "}
              <span style={{ color }}>{color}</span>{" "}
            </Text>
            <div
              style={{ backgroundColor: color }}
              className="w-8 h-8 rounded-lg shadow-[inset_0_-10px_16px_rgba(0,0,0,0.6)]"
            ></div>
          </Flex>
        </ModalBody>
        <ModalFooter width="full" gap="1rem">
          <button
            onClick={onClose}
            className="bg-gradient-to-r from-gray-200 to-gray-500 text-black text-lg font-normal py-2 px-6 rounded-lg hover:scale-105 transition-all"
          >
            Cancel
          </button>
          <button 
          onClick={saveColor}
          className="bg-gradient-to-r from-blue-800 to-blue-500 text-white text-lg font-normal py-2 px-6 rounded-lg hover:scale-105 transition-all">
            Submit
          </button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
export default DashboardColorPicker;
