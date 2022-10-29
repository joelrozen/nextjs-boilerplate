import { Text } from '@chakra-ui/react';
import { ReactElement } from 'react';
import MainLayout from '../layouts/main';
import { PageWithLayout } from './_app';

const Home: PageWithLayout = () => {
  return (
    <Text data-testid={'welcome'} fontSize={'2xl'}>
      Welcome Home
    </Text>
  );
};

Home.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;

export default Home;
