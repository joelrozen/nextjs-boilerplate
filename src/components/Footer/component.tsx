import { Box, Container, Link, Stack, Text } from '@chakra-ui/react';

export const Footer = () => {
  return (
    <Box
      bg="gray.50"
      color="gray.700"
      position="absolute"
      bottom={0}
      width="100%"
      data-testid="footer"
    >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Stack direction={'row'} spacing={6}>
          <Link href={'#'}>Home</Link>
          <Link href={'#'}>About</Link>
          <Link href={'#'}>Contact</Link>
        </Stack>
        <Text>© {new Date().getFullYear()}</Text>
      </Container>
    </Box>
  );
};
