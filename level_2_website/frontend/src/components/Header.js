import React from 'react';
import { 
  Box,
  Flex,
  Heading,
  Button,
  IconButton,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  Stack,
} from '@chakra-ui/react';
import { 
  SunIcon,
  MoonIcon,
  HamburgerIcon,
  CloseIcon,
} from '@chakra-ui/icons';

const Header = () => {
  const {colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue('teal.500', 'teal.700');
  const color = useColorModeValue('white', 'white');
  const { isOpen, onOpen, onClose} = useDisclosure();

  return (
      <Box bg={bg} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Heading color={color} size='md'>
              Level 2 Website
          </Heading>
          <Flex alignItems={'center'}>
              {/* Navigation links for medium screens and up */}
              <Stack
                direction={'row'}
                spacing={7}
                display={{base:'none', md:'flex'}}
                >
                <Button variant='ghost' color={color}> About</Button>
                <Button variant='ghost' color={color}> Models</Button>
                <Button variant='ghost' color={color}> Pricing</Button>
                <Button variant='ghost' color={color}> Blog</Button>
              <Button onClick={toggleColorMode} colorScheme='teal' variant='ghost'>
                  {colorMode === 'light' ? <MoonIcon/> : <SunIcon />}
              </Button>
              </Stack>
              {/* Hamburger menu icon for small screens */}
              <IconButton
              size="md"
              icon={isOpen ? <CloseIcon/> : <HamburgerIcon/>}
              aria-label="Open-Menu"
              display={{md:'None'}}
              onClick={isOpen ? onClose : onOpen}
              color={color}
              />
          </Flex>
        </Flex>
        {/*Mobile Navigation Menu */}
        {isOpen ?(
          <Box pb={4} display={{md:'none'}}>
            <Stack as={'nav'} spacing={4}>
              <Button variant='ghost' color={color}>About </Button>
              <Button variant='ghost' color={color}>Models </Button>
              <Button variant='ghost' color={color}>Pricing </Button>
              <Button variant='ghost' color={color}>Blog </Button>
              <Button onClick={toggleColorMode} colorScheme='teal' variant='ghost'>
                  {colorMode === 'light' ? <MoonIcon/> : <SunIcon />}
              </Button>
            </Stack>
      </Box>
      ) :null}
      </Box>
    );   
  };

  export default Header;