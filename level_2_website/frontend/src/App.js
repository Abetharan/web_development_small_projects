import React from 'react';
import { Box, Container, Text, Heading, Button } from '@chakra-ui/react';
import Header from './components/Header'
import Footer from './components/Footer';
function App() {
  return (
  <div>
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Header />
      {/* Main Content */}
      <Container maxW="container.md" flex="1" minHeight="100vh">
        <Heading mb={6} fontSize={{base:'2x1', md: '4x1', lg:'6x1'}}>Welcome to Level 2 Website</Heading>
        <Text fontsize='x1' mb={4}>
          This is Level 2 simple applicatio ndemonstration
        </Text>
        <Button colorScheme='teal' size='lg'>
          Get started
        </Button>
      </Container>
      <Footer/>
    </Box>
  </div>
  );
}

export default App;
