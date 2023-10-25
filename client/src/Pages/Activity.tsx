import { UserContext } from "../Context/UserContextProvider"
import {Stack, Text, Heading, Card, Image} from "@chakra-ui/react"
import { useContext } from 'react'
import {useQuery} from "@tanstack/react-query"
import { retrieveGenerations } from "../api"

const Activity = () => {
  const {user} = useContext(UserContext)
  const {data, isLoading, isSuccess, isError} = useQuery({
    queryKey: ["generations"],
    queryFn: () => retrieveGenerations(user?.email as string)
  })

  const testData = [
    {url: "", prompt: "Angry bird", n: 2, format: "512x512"},
    {url: "", prompt: "Angry bird", n: 2, format: "512x512"},
    {url: "", prompt: "Angry bird", n: 2, format: "512x512"},
    {url: "", prompt: "Angry bird", n: 2, format: "512x512"}
  ]

  return (
    <Stack backgroundColor="gray.900" height="100vh" alignItems="start" justifyContent="start" fontFamily="Poppins, sans-serif" gap="2rem">
      <Stack position="relative" paddingTop="4rem" alignItems="center" justifyContent="center" width="100vw" textAlign="center">
        <div className="absolute -z-0 bg-blue-900 w-1/4 h-20 blur-3xl "></div>
        <Text fontSize="7xl" fontWeight="black" textColor="whiteAlpha.800" className="leading-[4rem] ">
          Hi there!
        </Text>
        <Text fontSize="sm" fontWeight="light" textColor="gray.500" width="70%">Track your activity and gain more control over your generated icons</Text>
      </Stack>
      <Stack paddingX="2rem">
        <Heading fontFamily="Poppins, sans-serif" textColor="whiteAlpha.800" fontWeight="light" fontSize="2xl">Generations</Heading>
        <Stack>
          {}
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Activity