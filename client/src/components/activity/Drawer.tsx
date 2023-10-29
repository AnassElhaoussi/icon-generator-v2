import {Stack, Icon, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, DrawerFooter, Button, Image as Img, DrawerCloseButton, Select} from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { saveAs } from "file-saver"
import { HamburgerIcon } from "@chakra-ui/icons"
import axios from "axios"

export const DrawerFC = ({URLsData, isOpen, onClose}: {URLsData: string[], isOpen: boolean, onClose: () => void}) => {
    
    const handleDownload = (imgURL: string) => {
      const link = document.createElement("a")

      link.download = imgURL
      link.href = "image.png"
      link.click()
    }
    
    return (
        <Drawer isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent display="flex" flexDirection="column" alignItems="center" textColor="white" fontFamily="Poppins, sans-serif" backgroundColor="black">
          <DrawerCloseButton />
          <DrawerHeader>Generation</DrawerHeader>
          <DrawerBody display="flex" flexDirection="column" gap="1rem">
            {URLsData.map((url) => (
                <Stack>
                    <Select placeholder={<Icon as={HamburgerIcon} onClick={() => handleDownload(url)} />}>
                        <option value="">Download</option>
                        <option value=""></option>
                        <option value=""></option>
                    </Select>
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