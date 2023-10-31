import { Skeleton, VStack, Flex } from "@chakra-ui/react"

export const LoadingSkeleton = ({isDarkMode}: {isDarkMode: boolean}) => {
    return (
        <Flex flexWrap="wrap" gap="2rem">
            <VStack>
                <Skeleton height="10rem" width="25rem" 
                startColor={isDarkMode ? "gray.900" : "gray.200"} 
                endColor={isDarkMode ? "gray.600" : "gray.100"} borderRadius="2xl" />
                <Skeleton height="25rem" width="25rem" startColor={isDarkMode ? "gray.900" : "gray.200"} 
                endColor={isDarkMode ? "gray.600" : "gray.100"} borderRadius="2xl"/>
            </VStack>
            <VStack>
                <Skeleton height="10rem" width="25rem" startColor={isDarkMode ? "gray.900" : "gray.200"} 
                endColor={isDarkMode ? "gray.600" : "gray.100"} borderRadius="2xl"/>
                <Skeleton height="25rem" width="25rem" startColor={isDarkMode ? "gray.900" : "gray.200"} 
                endColor={isDarkMode ? "gray.600" : "gray.100"} borderRadius="2xl"/>
            </VStack>
            <VStack>
                <Skeleton height="10rem" width="25rem" startColor={isDarkMode ? "gray.900" : "gray.200"} 
                endColor={isDarkMode ? "gray.600" : "gray.100"} borderRadius="2xl"/>
                <Skeleton height="25rem" width="25rem" startColor={isDarkMode ? "gray.900" : "gray.200"} 
                endColor={isDarkMode ? "gray.600" : "gray.100"} borderRadius="2xl"/>
            </VStack>
        </Flex>
    )
}
export default LoadingSkeleton  