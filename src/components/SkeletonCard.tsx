import { Box, Skeleton } from "@chakra-ui/react";

function SkeletonCard() {
  return (
    <Box
      p={6}
      borderRadius="2xl"
      boxShadow="md"
      bg={"gray.100"}
      maxW="sm"
      w="100%"
      mx="auto"
      textAlign="center"
    >
      <Skeleton height="30px" />
      <Skeleton height="54px" mt="3" />
      <Skeleton height="36px" mt="3" />
    </Box>
  );
}

export default SkeletonCard;
