import { UserContext } from "../Context/UserContextProvider"
import {Stack, Text, Heading} from "@chakra-ui/react"
import { useContext } from 'react'

const Activity = () => {
  const {user} = useContext(UserContext)
  return (
    <Stack backgroundColor="gray.800" height="100vh" alignItems="start" justifyContent="start" fontFamily="Poppins, sans-serif" gap="2rem">
      <Stack gap={1} paddingTop="4rem" alignItems="center" justifyContent="center" width="100vw" textAlign="center">
        <Text fontSize="7xl" fontWeight="black" textColor="whiteAlpha.800" lineHeight="9" marginBottom="1rem" backgroundColor="gray.900" paddingX="2rem" borderRadius="lg">
          Hi {user.name}!
        </Text>
        <Text fontSize="sm" fontWeight="light" textColor="gray.500" width="70%">Track your activity and gain more control over your generated icons</Text>
      </Stack>
      <Stack paddingX="2rem">
        <Heading fontFamily="Poppins, sans-serif" textColor="whiteAlpha.800" fontWeight="light" fontSize="2xl">Generations</Heading>
      </Stack>
    </Stack>
  )
}

export default Activity