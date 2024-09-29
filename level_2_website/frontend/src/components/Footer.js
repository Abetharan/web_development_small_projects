import React from 'react';
import { Box, Text, useColorModeValue} from '@chakra-ui/react';

const Footer = () => {
  const color = useColorModeValue('white', 'white');
  const bg = useColorModeValue('teal.500', 'teal.700');
  return (
    <Box bg={bg} color={color} py={4} textAlign="center" mt="auto">
        <Text>&copy; {new Date().getFullYear()} Level 2 Wesbite. All rights reserved.</Text>
    </Box>
  );
};
export default Footer