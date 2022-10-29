import { Box, Container, Link, Stack } from '@chakra-ui/react';

export const Header = () => {
  return (
    <Box bg="gray.50" color="gray.700" data-testid="header">
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        px={0}
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
      </Container>
    </Box>
  );
};
