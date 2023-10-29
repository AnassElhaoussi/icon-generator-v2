import { UserContext } from "../Context/UserContextProvider"
import {Stack, Text, Heading, Card, Image, Drawer, DrawerOverlay,DrawerContent, DrawerBody, DrawerFooter, Button, DrawerCloseButton, DrawerHeader, Flex, Divider, VStack, Alert, AlertIcon, AlertDialogHeader, AlertDescription, AlertDialogContent} from "@chakra-ui/react"
import { useContext, useState } from 'react'
import {useQuery} from "@tanstack/react-query"
import { retrieveGenerations } from "../api"
import { Link } from "react-router-dom"
import { faArrowLeft, faFileDownload } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faImage } from "@fortawesome/free-solid-svg-icons"
import { faCheck, faDiamond } from "@fortawesome/free-solid-svg-icons"
import { useDisclosure } from "@chakra-ui/react"
import { CreditContext } from "../Context/CreditsContext"
import { ICreditsContextValues } from "../types/Context/credits"
import CountUp from "react-countup"
import LoadingSkeleton from "../components/activity/LoadingSkeleton"
import DrawerFC from "../components/activity/Drawer"

const Activity = () => {
  const {user} = useContext(UserContext)
  const {onOpen, isOpen, onClose} = useDisclosure()
  const [URLsData, setURLsData] = useState<string[]>([])
  const {data, isLoading, isSuccess, isError} = useQuery({
    queryKey: ["generations"],
    queryFn: () => retrieveGenerations(user?.email as string)
  })

  const totalNumOfGenerations = data?.data.length
  const generatedImages = data?.data.map(({URLs}) => URLs.length).reduce((a, b) => a+b)
  const {credits} = useContext(CreditContext) as ICreditsContextValues

  return (
    <Stack overflow="hidden" display="flex" flexDirection="column" minHeight="100vh" gap="2rem" backgroundColor="#141414" fontFamily="Poppins, sans-serif">
      <Flex display="flex" justifyContent="space-between" alignItems="center" backgroundColor="gray.900" paddingY="1rem" paddingX="2rem">
        <Heading fontSize="1.5rem" fontFamily="Poppins, sans-serif" fontWeight="light" textColor="gray.200" >My activity</Heading>
        <Link to="/dashboard">
          <FontAwesomeIcon icon={faArrowLeft} className="text-white cursor-pointer" />
        </Link>
      </Flex>
      <Flex alignItems="center" justifyContent="center" flexWrap="wrap" gap="2rem">
        <Card position="relative" minWidth="15rem" padding="1rem" className="bg-gradient-to-r from-blue-500 to-blue-800"  borderRadius="xl">
          <FontAwesomeIcon icon={faCheck} className="absolute right-5 text-white" />
          <Heading textColor="white" fontFamily="Poppins, sans-serif" as="h2" fontSize="8xl">
            <CountUp end={totalNumOfGenerations as number} duration={0.75} />
          </Heading>
          <Text textColor="gray.200" fontWeight="light">Generations made</Text>
        </Card>
        <Card position="relative" minWidth="15rem" padding="1rem" className="bg-gradient-to-r from-yellow-500 to-yellow-800" borderRadius="xl">
          <FontAwesomeIcon icon={faImage} className="absolute right-5 text-white" />
          <Heading textColor="white" fontFamily="Poppins, sans-serif" as="h2" fontSize="8xl">
            <CountUp end={generatedImages as number} duration={0.75}  />
          </Heading>
          <Text textColor="gray.200" fontWeight="light">Images generated</Text>
        </Card>
        <Card position="relative" minWidth="15rem" padding="1rem" className="bg-gradient-to-r from-purple-500 to-purple-800" borderRadius="xl">
          <FontAwesomeIcon icon={faDiamond} className="absolute right-5 text-white" />
          <Heading textColor="white" fontFamily="Poppins, sans-serif" as="h2" fontSize="8xl">
            <CountUp end={credits as number} duration={0.75}  />
          </Heading>
          <Text textColor="gray.200" fontWeight="light">Credits left</Text>
        </Card>
      </Flex>
      <Divider borderColor="gray.700" />
      {credits === 0 && (
          <Alert backgroundColor="gray.900" status="info" marginX="2rem" borderRadius="2xl" padding="2rem" w="full">
            <AlertIcon />
            <Stack gap="0.5rem">
              <Heading fontFamily="Poppins, sans-serif" fontSize="4xl" textColor="white" fontWeight="normal"> 
                You're out of credits!
              </Heading>
              <Text textColor="gray.500" fontSize="sm">
                Visit our {' '} 
                <Link 
                to="/pricing" 
                style={{textDecoration: "underline"}} 
                className="cursor-pointer">pricing</Link> page and buy more credits to generate more icons!
              </Text>
            </Stack>
          </Alert>
      )}
      <Stack padding="2rem" gap="2rem">
        <VStack>
          <Heading fontFamily="Poppins, sans-serif" textColor="gray.300" fontWeight="semibold" fontSize="4xl">Generations</Heading>
          <Text textColor="gray.600">These are your generations, you can now download them</Text>
        </VStack>
        <Flex gap="2rem" flexWrap="wrap" alignItems="center" justifyContent="center" paddingTop="2rem">
          {isLoading && <LoadingSkeleton />}
          {isSuccess && data?.data.map((generation) => (
            <Card display="flex" width="25rem" backgroundColor="#191919" borderRadius="2xl" paddingBottom="2rem" className="hover:-translate-y-10 transition-all hover:shadow-2xl hover:shadow-gray-900  ">
              <Image src={generation.URLs[0]} height={40} width="full" objectFit="cover" borderTopRadius="2xl" />
              <Flex justifyContent="space-between" padding="1rem">
                <Text className="text-blue-800 bg-blue-500 px-2 mb-2 rounded-lg" textAlign="end" >
                  512x512
                </Text>
                <FontAwesomeIcon icon={faFileDownload} className="cursor-pointer text-white" onClick={() => {
                  setURLsData(generation.URLs)
                  onOpen()
                }} />
              </Flex>
              <VStack display="flex" alignItems="center" gap="0.5rem" paddingX="2rem" textAlign="center">
                <Flex position="relative" alignItems="center" gap="0.5rem">
                  <div style={{backgroundColor: generation.color}} className="absolute left-0 p-1 rounded-full w-5 h-5"></div>
                  <Heading display="flex" alignItems="center" fontFamily="Poppins, sans-serif" marginLeft="2rem" textColor="gray.200" fontWeight="black" fontSize="5xl">
                    {generation.iconObject}
                    <span className="text-2xl font-light ml-2">{`(${generation.n})`} </span>
                  </Heading>
                </Flex>
                <Text fontSize="sm" textColor="gray.500">{generation.iconDescription}</Text>
                <Text backgroundColor="yellow.500" textColor="yellow.900" className="w-fit rounded-md p-1 mt-3">{generation.style} </Text>
              </VStack>
            </Card>
          )).reverse()}
        </Flex>
      </Stack>
      <DrawerFC isOpen={isOpen} onClose={onClose} URLsData={URLsData} />
    </Stack>

  )
}

export default Activity