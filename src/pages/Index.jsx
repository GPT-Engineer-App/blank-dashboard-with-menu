import { useState } from "react";
import { Box, Flex, IconButton, VStack, HStack, Text, Container } from "@chakra-ui/react";
import { FaBars, FaHome, FaUser } from "react-icons/fa";

const Navbar = ({ onOpenSidebar }) => (
  <Flex as="nav" bg="teal.500" color="white" padding="1rem" justifyContent="space-between" alignItems="center">
    <Text fontSize="xl" fontWeight="bold">
      Dashboard
    </Text>
    <IconButton aria-label="Open Menu" icon={<FaBars />} onClick={onOpenSidebar} />
  </Flex>
);

const Sidebar = ({ isOpen, onClose }) => (
  <Box position="fixed" left={isOpen ? 0 : "-250px"} top={0} w="250px" h="100vh" bg="gray.800" color="white" transition="left 0.3s" zIndex={20}>
    <VStack align="start" spacing={4} padding="1rem">
      <HStack spacing={2}>
        <FaHome />
        <Text>Home</Text>
      </HStack>
      <HStack spacing={2}>
        <FaUser />
        <Text>Profile</Text>
      </HStack>
    </VStack>
  </Box>
);

const Index = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleOpenSidebar = () => setSidebarOpen(true);
  const handleCloseSidebar = () => setSidebarOpen(false);

  return (
    <Box>
      <Navbar onOpenSidebar={handleOpenSidebar} />
      <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />
      <Container maxW="container.md" mt="4rem">
        <Text fontSize="2xl">Welcome to the Dashboard</Text>
        <Text>This is a blank dashboard with a navbar and sidebar.</Text>
      </Container>
    </Box>
  );
};

export default Index;
