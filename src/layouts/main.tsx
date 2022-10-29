import { Box, Container } from '@chakra-ui/react';
import { ReactElement } from 'react';
import { Footer } from '../components/Footer/component';
import { Header } from '../components/Header/component';

export default function MainLayout({ children }: { children: ReactElement }) {
  return (
    <Container minHeight="100vh" maxWidth="100%" px={0} position="relative">
      <Header />
      <Box marginX="auto" maxWidth="6xl" py={10}>
        {children}
      </Box>
      <Footer />
    </Container>
  );
}
