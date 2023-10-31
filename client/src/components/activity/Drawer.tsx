import {Stack, Icon, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, DrawerFooter, Button, Image as Img, DrawerCloseButton, Select} from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { saveAs } from "file-saver"
import { CheckIcon, HamburgerIcon, DownloadIcon } from "@chakra-ui/icons"
import axios from "axios"
import { useEffect, useState } from "react"

export const DrawerFC = ({
  URLsData, 
  isOpen, 
  onClose
}: {
  URLsData: string[], 
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
    const handleDownload = (imgURL: string) => {
      const link = document.createElement("a")

      link.download = imgURL
      link.href = "image.png"
      link.click()
    }

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
          flexDirection="column" 
          gap="1rem">
            {URLsData.map((url) => (
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
                          <option value="" className="cursor-pointer">
                            Download
                          </option>
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