import { Box, Container, Flex, Heading, Link, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" bg="blue.600" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">Teacher App</Heading>
        <Flex>
          <Link as={RouterLink} to="/" p={2} color="white" _hover={{ textDecoration: "underline" }}>Home</Link>
          <Link as={RouterLink} to="/classes" p={2} color="white" _hover={{ textDecoration: "underline" }}>Classes</Link>
          <Link as={RouterLink} to="/students" p={2} color="white" _hover={{ textDecoration: "underline" }}>Students</Link>
        </Flex>
      </Flex>
      <Box p={4}>
        <VStack spacing={4} align="stretch">
          <Heading as="h2" size="md">Welcome to the Teacher App</Heading>
          <Text>This is your dashboard where you can track your classes and students.</Text>
          <Box bg="gray.100" p={4} borderRadius="md">
            <Heading as="h3" size="sm">Classes Overview</Heading>
            <Text>No classes available. Please add some classes.</Text>
          </Box>
          <Box bg="gray.100" p={4} borderRadius="md">
            <Heading as="h3" size="sm">Students Overview</Heading>
            <Text>No students available. Please add some students.</Text>
          </Box>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;