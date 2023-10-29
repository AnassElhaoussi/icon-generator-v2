import { Skeleton, VStack, Flex } from "@chakra-ui/react"

export const LoadingSkeleton = () => {
    return (
        <Flex flexWrap="wrap" gap="2rem">
            <VStack>
                <Skeleton height="10rem" width="25rem" startColor="gray.900" endColor="gray.800" borderRadius="2xl" />
                <Skeleton height="25rem" width="25rem" startColor="gray.900" endColor="gray.800" borderRadius="2xl"/>
            </VStack>
            <VStack>
                <Skeleton height="10rem" width="25rem" startColor="gray.900" endColor="gray.800" borderRadius="2xl"/>
                <Skeleton height="25rem" width="25rem" startColor="gray.900" endColor="gray.800" borderRadius="2xl"/>
            </VStack>
            <VStack>
                <Skeleton height="10rem" width="25rem" startColor="gray.900" endColor="gray.800" borderRadius="2xl"/>
                <Skeleton height="25rem" width="25rem" startColor="gray.900" endColor="gray.800" borderRadius="2xl"/>
            </VStack>
        </Flex>
    )
}
export default LoadingSkeleton  