import { UserContext } from "../Context/UserContextProvider"
import {Stack, Text, Heading, Card, Image, Drawer, DrawerOverlay,DrawerContent, DrawerBody, DrawerFooter, Button, DrawerCloseButton, DrawerHeader, Flex, Divider} from "@chakra-ui/react"
import { useContext, useState } from 'react'
import {useQuery} from "@tanstack/react-query"
import { retrieveGenerations } from "../api"
import { Link } from "react-router-dom"
import { faArrowLeft, faFileDownload } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faImage } from "@fortawesome/free-solid-svg-icons"
import { faCheck, faDiamond } from "@fortawesome/free-solid-svg-icons"
import { useDisclosure } from "@chakra-ui/react"

const Activity = () => {
  const {user} = useContext(UserContext)
  const {onOpen, isOpen, onClose} = useDisclosure()
  const [URLsData, setURLsData] = useState<string[]>([])
  const {data, isLoading, isSuccess, isError} = useQuery({
    queryKey: ["generations"],
    queryFn: () => retrieveGenerations(user?.email as string)
  })

  const testData = [
    {urls: ["", "", ""], prompt: "Angry bird", n: 2, format: "512x512", iconObject: "Bird", iconDescription: "lorem, ipsum, balbal", color: "yellow", iconStyle: "3d" },
    {urls: ["", "", ""], prompt: "Angry bird", n: 2, format: "512x512", iconObject: "Girafe", iconDescription: "lorem, ipsum, balbal", color: "black", iconStyle: "polygon"},
    {urls: ["", "", ""], prompt: "Angry bird", n: 2, format: "512x512", iconObject: "Text", iconDescription: "lorem, ipsum, balbal", color: "green", iconStyle: "pixelated"},
    {urls: ["", "", ""], prompt: "Angry bird", n: 2, format: "512x512", iconObject: "Bee", iconDescription: "lorem, ipsum, balbal", color: "blue", iconStyle: "pixar"}
  ]

  return (
    <Stack display="flex" flexDirection="column" minHeight="100vh" gap="2rem" backgroundColor="#141414" fontFamily="Poppins, sans-serif">
      <Flex display="flex" justifyContent="space-between" alignItems="center" backgroundColor="gray.900" paddingY="1rem" paddingX="2rem">
        <Heading fontSize="1.5rem" fontFamily="Poppins, sans-serif" fontWeight="bold" textColor="gray.200" >My activity</Heading>
        <FontAwesomeIcon icon={faArrowLeft} className="text-white" />
      </Flex>
      <Flex alignItems="center" justifyContent="center" flexWrap="wrap" gap="2rem">
        <Card position="relative" minWidth="15rem" padding="1rem" className="bg-gradient-to-r from-blue-500 to-blue-800"  borderRadius="xl">
          <FontAwesomeIcon icon={faCheck} className="absolute right-5 text-white" />
          <Heading textColor="white" fontFamily="Poppins, sans-serif" as="h2" fontSize="8xl">100</Heading>
          <Text textColor="gray.200" fontWeight="light">Generations made</Text>
        </Card>
        <Card position="relative" minWidth="15rem" padding="1rem" className="bg-gradient-to-r from-yellow-500 to-yellow-800" borderRadius="xl">
          <FontAwesomeIcon icon={faImage} className="absolute right-5 text-white" />
          <Heading textColor="white" fontFamily="Poppins, sans-serif" as="h2" fontSize="8xl">0</Heading>
          <Text textColor="gray.200" fontWeight="light">Images generated</Text>
        </Card>
        <Card position="relative" minWidth="15rem" padding="1rem" className="bg-gradient-to-r from-purple-500 to-purple-800" borderRadius="xl">
          <FontAwesomeIcon icon={faDiamond} className="absolute right-5 text-white" />
          <Heading textColor="white" fontFamily="Poppins, sans-serif" as="h2" fontSize="8xl">100</Heading>
          <Text textColor="gray.200" fontWeight="light">Credits left</Text>
        </Card>
      </Flex>
      <Divider borderColor="gray.700" />
      <Stack padding="2rem" gap="2rem">
        <Heading fontFamily="Poppins, sans-serif" textColor="gray.300" fontWeight="extrabold" fontSize="4xl">Generations</Heading>
        <Flex gap="2rem" flexWrap="wrap">
          {testData.map((generation) => (
            <Card display="flex"  minWidth="25rem" backgroundColor="#191919" borderRadius="2xl" padding="1rem">
              <Flex justifyContent="space-between">
                <Text textColor="gray.500" textAlign="end">
                  {generation.format}
                </Text>
                <FontAwesomeIcon icon={faFileDownload} className="cursor-pointer text-white" onClick={() => {
                  setURLsData(generation.urls)
                  onOpen()
                }} />
              </Flex>
              <>
                <Flex alignItems="center" gap="0.5rem">
                  <div style={{backgroundColor: generation.color}} className="p-1 rounded-full w-5 h-5"></div>
                  <Heading display="flex" alignItems="center" fontFamily="Poppins, sans-serif" textColor="gray.200" fontWeight="black" fontSize="5xl">
                    {generation.iconObject}
                    <span className="text-2xl font-light ml-2">{`(${generation.n})`} </span>
                  </Heading>
                </Flex>
                <Text fontSize="sm" textColor="gray.500">{generation.iconDescription}</Text>
                <Text className="bg-purple-400 text-purple-800 w-fit rounded-md p-1 mt-3">{generation.iconStyle} </Text>
              </>
            </Card>
          ))}
        </Flex>
      </Stack>
      <Drawer isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent display="flex" flexDirection="column" alignItems="center" textColor="white" fontFamily="Poppins, sans-serif" backgroundColor="black">
          <DrawerCloseButton />
          <DrawerHeader>Generation</DrawerHeader>
          <DrawerBody display="flex" flexDirection="column" gap="1rem">
            {URLsData.map((url) => (
                <Image 
                src={url} 
                width={40} 
                height={40}
                borderRadius="lg" 
                border={`4px solid #7e14ff
                `} />
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
    </Stack>

  )
}

export default Activity