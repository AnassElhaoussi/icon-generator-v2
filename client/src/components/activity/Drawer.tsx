import {
  Heading, 
  Text,
  Stack, 
  Icon, 
  Drawer, 
  DrawerOverlay, 
  DrawerContent, 
  DrawerHeader, 
  DrawerBody, 
  DrawerFooter, 
  Button, 
  Image as Img, 
  DrawerCloseButton, 
  Select
} from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { saveAs } from "file-saver"
import { CheckIcon, HamburgerIcon, DownloadIcon } from "@chakra-ui/icons"
import axios from "axios"
import { useEffect, useState } from "react"
import { IGeneration } from "../../api/types"
import { DownloadImage } from "./DownloadImage"


export const DrawerFC = ({
  generation, 
  isOpen, 
  onClose
}: {
  generation: IGeneration, 
  isOpen: boolean, 
  onClose: () => void
}) => {

    const [dropdownMenu, setDropdownMenu] = useState<{
      isActive: boolean,
      img: null | string
    }>({
      isActive: false,
      img: null
    })  

    return (
        <Drawer isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent display="flex"
        flexDirection="column" 
        alignItems="center"
        textColor="white" 
        fontFamily="Poppins, sans-serif" 
        backgroundColor="black">
          <DrawerCloseButton />
          <DrawerHeader>Generation</DrawerHeader>
          <DrawerBody display="flex" 
          alignItems="center"
          flexDirection="column" 
          gap="2rem">
            <Stack textAlign="center">
              <Heading textColor="gray.300" fontWeight="extrabold">
                {generation?.iconObject}
              </Heading>
              <Text textColor="gray.600">
                {generation?.iconDescription}
              </Text>
            </Stack>
            <Stack>
            {generation?.URLs.map((url) => (
                <Stack position="relative">
                    <Stack position="absolute">
                      <Icon 
                      as={HamburgerIcon} 
                      backgroundColor="purple.600"
                      padding={1}
                      cursor="pointer"
                      fontSize="2xl"
                      borderBottomRadius="md"
                      borderTopRadius="md"
                      userSelect="none"
                      onClick={() => setDropdownMenu({
                        isActive: !dropdownMenu.isActive,
                        img: url
                      })} />
                      {(
                        dropdownMenu.isActive 
                        && dropdownMenu.img === url
                      ) && (
                        <Stack fontSize="xs" 
                        backgroundColor="gray.900" 
                        padding="1rem" 
                        borderRadius="md">
                          <DownloadImage name={generation.iconObject} publicURL={url} />
                          <a 
                          className="cursor-pointer" 
                          href={url} 
                          target="_blank">
                            Open on another tab
                          </a>
                        </Stack>
                      )}
                    </Stack>
                    <Img
                    src={url} 
                    width={40} 
                    height={40}
                    borderRadius="lg" 
                    border={`4px solid #7e14ff`} 
                     />
                </Stack>
                ))}
            </Stack>
          </DrawerBody>
          <DrawerFooter justifyContent="space-between" width="full">
              <Link to="/dashboard">
                <Button 
                colorScheme="blue">
                    Back to dashboard
                </Button>
              </Link>
              <Button colorScheme="gray" 
              onClick={onClose}>
                Cancel
              </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    )
}

export default DrawerFC