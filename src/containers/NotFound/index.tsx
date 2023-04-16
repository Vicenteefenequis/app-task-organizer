import {
  Box,
  Button,
  Container,
  Heading,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

const NotFound: React.FC = () => {
  return (
    <Container
      maxW="container.lg"
      height="100vh"
      centerContent
      justifyContent={'center'}
    >
      <Box color="black">
        <img
          src="https://verticis.com.br/wp-content/uploads/2022/09/erro-404-.jpg"
          alt="Imagem de error 404"
          width={'100%'}
        />
        <VStack spacing="24px">
          <Heading>Ah, não... Perdemos esta página</Heading>
          <Text>
            Pesquisamos em todos os lugares, mas não conseguimos encontrar oque
            você está procurando. Vamos encontrar um lugar melhor para você ir
          </Text>
          <Button bg="purple.400">
            <Link
              color="white"
              href="/"
              _hover={{
                color: 'black',
              }}
            >
              Voltar para a página inicial
            </Link>
          </Button>
        </VStack>
      </Box>
    </Container>
  );
};

export default NotFound;
